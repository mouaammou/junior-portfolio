export type Project = {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  role: string;
  description: string;
  thumbnailImage: string;
  screenshots: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: 'ft-transcendence',
    title: 'FT_Transcendence',
    tagline: 'Real-time multiplayer Pong game with authentication & chat',
    role: 'Full Stack Developer (1337 Project)',
    description:
      'A real-time multiplayer Pong game featuring authentication, friend management, chat rooms, and live game sessions. Built following 1337’s peer-learning methodologies with focus on real-time communication and clean architecture.',
    thumbnailImage: '/projects/project-2/background.png',
    screenshots: [
      { src: '/projects/project-2/1.png', alt: 'Game interface' },
      { src: '/projects/project-2/2.png', alt: 'Chat system' },
      { src: '/projects/project-2/3.png', alt: 'Chat system' },
      { src: '/projects/project-2/4.png', alt: 'Chat system' },
      { src: '/projects/project-2/5.png', alt: 'Chat system' },
      { src: '/projects/project-2/6.png', alt: 'Chat system' },
      { src: '/projects/project-2/7.png', alt: 'Chat system' },
    ],
  },

  {
    id: 2,
    slug: 'Exchange-lab-dashboard',
    title: 'Exchange lab — Internal Dashboard',
    tagline: 'Analytics dashboard & reusable component system',
    role: 'Full stack Developer',
    description:
      'Developed internal dashboards to convert Excel datasets into interactive visual reports. Implemented reusable React components, scalable state management using Redux Toolkit, and full REST API integrations to ensure data consistency.',
    thumbnailImage: '/projects/project-1/background.png',
    screenshots: [
      { src: '/projects/project-1/1.png', alt: 'Game interface' },
      { src: '/projects/project-1/2.png', alt: 'Chat system' },
      { src: '/projects/project-1/3.png', alt: 'Chat system' },
      { src: '/projects/project-1/4.png', alt: 'Chat system' },
      { src: '/projects/project-1/5.png', alt: 'Chat system' },
      { src: '/projects/project-1/6.png', alt: 'Chat system' },
    ],
  },

  {
    id: 3,
    slug: 'Fully intergrated landing page',
    title: 'School Management System — Exchange Lab',
    tagline: 'Full-stack platform for education management',
    role: 'Full Stack Developer',
    description:
      'Built a full school management system using Next.js & Supabase. Features include role-based access, attendance tools, responsive dashboards, automated course assignment via Moodle API, and real-time statistics.',
    thumbnailImage: '/projects/project-3/background.png',
    screenshots: [
      { src: '/projects/project-3/1.png', alt: 'Game interface' },
      { src: '/projects/project-3/2.png', alt: 'Chat system' },
      { src: '/projects/project-3/3.png', alt: 'Chat system' },
      { src: '/projects/project-3/4.png', alt: 'Chat system' },
      { src: '/projects/project-3/5.png', alt: 'Chat system' },
      { src: '/projects/project-3/6.png', alt: 'Chat system' },
    ],
  },
  {
    id: 4,
    slug: 'Fully intergrated landing page',
    title: 'School Management System — Exchange Lab',
    tagline: 'Full-stack platform for education management',
    role: 'Full Stack Developer',
    description:
      'Built a full school management system using Next.js & Supabase. Features include role-based access, attendance tools, responsive dashboards, automated course assignment via Moodle API, and real-time statistics.',
    thumbnailImage: '/projects/project-4/background.png',
    screenshots: [
      { src: '/projects/project-4/1.png', alt: 'Game interface' },
      { src: '/projects/project-4/2.png', alt: 'Chat system' },
      { src: '/projects/project-4/3.png', alt: 'Chat system' },
      { src: '/projects/project-4/4.png', alt: 'Chat system' },
      { src: '/projects/project-4/5.png', alt: 'Chat system' },
      { src: '/projects/project-4/6.png', alt: 'Chat system' },
    ],
  },

  {
    id: 5,
    slug: 'ai-shopify-agent',
    title: 'AI Shopify Theme Generator — Codro.dev',
    tagline: 'AI-powered agent for dynamic theme generation',
    role: 'Full Stack Developer',
    description:
      'Developed an AI-powered agent using Next.js, Supabase, V0 API, and Gemini API. Implemented secure authentication, subscription logic, automated billing triggers, and real-time usage tracking for theme generation.',
    thumbnailImage: '/projects/project-5/background.png',
    screenshots: [
      { src: '/projects/project-5/1.png', alt: 'Game interface' },
      { src: '/projects/project-5/2.png', alt: 'Chat system' },
      { src: '/projects/project-5/3.png', alt: 'Chat system' },
      { src: '/projects/project-5/4.png', alt: 'Chat system' },
      { src: '/projects/project-5/5.png', alt: 'Chat system' },
      { src: '/projects/project-5/6.png', alt: 'Chat system' },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}