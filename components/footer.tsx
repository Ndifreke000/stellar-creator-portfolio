'use client';

import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="font-bold text-primary-foreground">S</span>
              </div>
              <span className="font-bold text-lg text-foreground">Stellar</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting world-class creators with exceptional opportunities.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigate</h3>
            <nav className="space-y-2">
              <Link href="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/creators" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Creators
              </Link>
              <Link href="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <nav className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Blog
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Bounties
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-primary" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} className="text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear} Stellar Creators. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
