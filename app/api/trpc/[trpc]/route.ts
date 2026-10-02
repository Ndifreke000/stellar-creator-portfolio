/**
 * tRPC API Route Handler
 *
 * Handles all tRPC requests with proper authentication,
 * error handling, and OpenTelemetry tracing.
 *
 * Stellar client initialisation:
 *   `initStellarClient()` runs once, on the first request, and its promise
 *   is reused afterwards (singleton pattern). It is deliberately not started
 *   at module load: `next build` evaluates this module without runtime
 *   secrets, and a KMS fetch there can only fail.
 */

import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server/api/router';
import { createContext } from '@/server/api/trpc';
import { initStellarClient } from '@/server/stellar/client';
import { NextRequest } from 'next/server';

let stellarReady: Promise<void> | undefined;

function ensureStellarClient(): Promise<void> {
  stellarReady ??= initStellarClient()
    .then(() => {
      console.log('[StellarClient] Initialised — circuit breaker active');
    })
    .catch((err) => {
      // Non-fatal: the circuit breaker will open on the first failed call anyway.
      console.error('[StellarClient] Initialisation failed:', err);
    });
  return stellarReady;
}

const handler = async (req: NextRequest) => {
  // Resolves immediately on every call after the first.
  await ensureStellarClient();

  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => createContext(req),
    onError:
      process.env.NODE_ENV === 'development'
        ? ({ path, error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`,
            );
          }
        : undefined,
  });
};

export { handler as GET, handler as POST };
