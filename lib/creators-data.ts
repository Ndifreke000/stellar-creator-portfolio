export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  link?: string;
  tags: string[];
  year: number;
}

export interface Creator {
  id: string;
  name: string;
  title: string;
  discipline: string;
  bio: string;
  avatar: string;
  coverImage: string;
  tagline: string;
  linkedIn: string;
  twitter: string;
  portfolio?: string;
  projects: Project[];
  skills: string[];
  stats?: {
    projects: number;
    clients: number;
    experience: number;
  };
}

export const creators: Creator[] = [
  {
    id: 'alex-studio',
    name: 'Alex Chen',
    title: 'Product Designer',
    discipline: 'UI/UX Design',
    bio: 'Crafting intuitive digital experiences that solve real problems. Specialized in design systems and user-centered methodology.',
    avatar: '/avatars/alex-chen.jpg',
    coverImage: '/covers/design-studio.jpg',
    tagline: 'Design systems that scale',
    linkedIn: 'https://linkedin.com/in/alexchen',
    twitter: 'https://x.com/alexchen',
    portfolio: 'https://alexchen.design',
    skills: ['Figma', 'Design Systems', 'Prototyping', 'User Research', 'Accessibility', 'Design Thinking'],
    stats: {
      projects: 45,
      clients: 20,
      experience: 8,
    },
    projects: [
      {
        id: 'project-1',
        title: 'SaaSPro Design System',
        description: 'Comprehensive design system for enterprise SaaS platform',
        category: 'Design System',
        image: '/projects/design-system.jpg',
        link: 'https://saaspro.design',
        tags: ['Design System', 'Figma', 'Enterprise'],
        year: 2024,
      },
      {
        id: 'project-2',
        title: 'FinTech Mobile App',
        description: 'Redesigned mobile banking app with improved UX',
        category: 'Product Design',
        image: '/projects/fintech-app.jpg',
        tags: ['Mobile', 'Finance', 'Responsive'],
        year: 2023,
      },
      {
        id: 'project-3',
        title: 'E-commerce Platform Redesign',
        description: 'Complete redesign resulting in 40% increase in conversions',
        category: 'E-commerce',
        image: '/projects/ecommerce.jpg',
        tags: ['E-commerce', 'Conversion', 'UX Research'],
        year: 2023,
      },
    ],
  },
  {
    id: 'maya-writes',
    name: 'Maya Patel',
    title: 'Content Strategist & Writer',
    discipline: 'Writing',
    bio: 'Creating compelling narratives and strategic content that drives engagement. Expertise in brand storytelling and technical writing.',
    avatar: '/avatars/maya-patel.jpg',
    coverImage: '/covers/writing-desk.jpg',
    tagline: 'Words that inspire action',
    linkedIn: 'https://linkedin.com/in/mayapatel',
    twitter: 'https://x.com/mayawrites',
    portfolio: 'https://mayapatel.com',
    skills: ['Content Strategy', 'Copywriting', 'Technical Writing', 'Brand Storytelling', 'SEO', 'Editorial'],
    stats: {
      projects: 60,
      clients: 25,
      experience: 10,
    },
    projects: [
      {
        id: 'project-4',
        title: 'TechStartup Brand Guidelines',
        description: 'Complete brand voice and messaging framework',
        category: 'Brand Strategy',
        image: '/projects/brand-guidelines.jpg',
        tags: ['Branding', 'Strategy', 'Copywriting'],
        year: 2024,
      },
      {
        id: 'project-5',
        title: 'API Documentation Suite',
        description: 'Technical documentation for complex developer platform',
        category: 'Technical Writing',
        image: '/projects/api-docs.jpg',
        tags: ['Technical Writing', 'Documentation', 'Developers'],
        year: 2023,
      },
      {
        id: 'project-6',
        title: 'Content Calendar & Strategy',
        description: 'Year-long social media and blog strategy for SaaS',
        category: 'Content Strategy',
        image: '/projects/content-calendar.jpg',
        tags: ['Content Marketing', 'Social Media', 'Strategy'],
        year: 2023,
      },
    ],
  },
  {
    id: 'jordan-creative',
    name: 'Jordan Maxwell',
    title: 'Creative Director',
    discipline: 'Content Creation',
    bio: 'Producing high-impact visual and multimedia content. Known for creative campaigns that generate millions of impressions.',
    avatar: '/avatars/jordan-maxwell.jpg',
    coverImage: '/covers/creative-studio.jpg',
    tagline: 'Content that captivates',
    linkedIn: 'https://linkedin.com/in/jordanmaxwell',
    twitter: 'https://x.com/jordanmax',
    portfolio: 'https://jordanmaxwell.co',
    skills: ['Video Production', 'Photography', 'Motion Design', 'Copywriting', 'Social Content', 'Campaign Strategy'],
    stats: {
      projects: 80,
      clients: 35,
      experience: 12,
    },
    projects: [
      {
        id: 'project-7',
        title: 'Brand Campaign Series',
        description: '5-part video campaign reaching 2M+ views',
        category: 'Video Production',
        image: '/projects/video-campaign.jpg',
        link: 'https://youtube.com/jordanmaxwell',
        tags: ['Video', 'Campaign', 'Social Media'],
        year: 2024,
      },
      {
        id: 'project-8',
        title: 'Photography Portfolio Showcase',
        description: 'Commercial and lifestyle photography collection',
        category: 'Photography',
        image: '/projects/photography.jpg',
        tags: ['Photography', 'Commercial', 'Lifestyle'],
        year: 2023,
      },
      {
        id: 'project-9',
        title: 'Motion Graphics Package',
        description: 'Animated brand identity system for streaming platform',
        category: 'Motion Design',
        image: '/projects/motion-design.jpg',
        tags: ['Animation', 'Motion Graphics', 'Branding'],
        year: 2023,
      },
    ],
  },
  {
    id: 'sophia-ux',
    name: 'Sophia Rodriguez',
    title: 'UX Researcher & Designer',
    discipline: 'UI/UX Design',
    bio: 'Data-driven designer focused on research-backed solutions. Passion for accessibility and inclusive design practices.',
    avatar: '/avatars/sophia-rodriguez.jpg',
    coverImage: '/covers/research-lab.jpg',
    tagline: 'Design informed by data',
    linkedIn: 'https://linkedin.com/in/sophiarodriguez',
    twitter: 'https://x.com/sophiaux',
    portfolio: 'https://sophiarodriguez.design',
    skills: ['User Research', 'Usability Testing', 'Wireframing', 'Prototyping', 'Accessibility', 'Analytics'],
    stats: {
      projects: 35,
      clients: 18,
      experience: 7,
    },
    projects: [
      {
        id: 'project-10',
        title: 'Healthcare Platform Redesign',
        description: 'User research-led redesign improving accessibility scores',
        category: 'UX Research',
        image: '/projects/healthcare-ux.jpg',
        tags: ['Healthcare', 'Accessibility', 'Research'],
        year: 2024,
      },
      {
        id: 'project-11',
        title: 'Accessibility Audit & Improvement',
        description: 'Complete A11y audit and implementation for major platform',
        category: 'Accessibility',
        image: '/projects/accessibility.jpg',
        tags: ['Accessibility', 'A11y', 'WCAG'],
        year: 2023,
      },
      {
        id: 'project-12',
        title: 'User Research Repository',
        description: 'Comprehensive UX research methodology guide and templates',
        category: 'Research',
        image: '/projects/research.jpg',
        tags: ['Research', 'Documentation', 'Methodology'],
        year: 2023,
      },
    ],
  },
];

export const disciplines = ['All', 'UI/UX Design', 'Writing', 'Content Creation'];

export const getDisciplineColor = (discipline: string): string => {
  const colors: Record<string, string> = {
    'UI/UX Design': 'from-blue-500 to-indigo-500',
    'Writing': 'from-purple-500 to-pink-500',
    'Content Creation': 'from-teal-500 to-green-500',
  };
  return colors[discipline] || 'from-gray-500 to-slate-500';
};

export const getCreatorsByDiscipline = (discipline: string): Creator[] => {
  if (discipline === 'All') return creators;
  return creators.filter(creator => creator.discipline === discipline);
};
