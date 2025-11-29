export type Project = {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  role: string;
  description: string;
  thumbnailImage: string;
  screenshots: { src: string; alt: string }[];
  website: string | null
};

export const projects: Project[] = [
    {
    id: 1,
    slug: 'Fully intergrated landing page',
    title: 'Landing page — Exchange Lab',
    tagline: 'Full-stack platform for education management',
    role: 'Full Stack Developer',
    description:
      'Worked in a 2-person team to design and build a multi-page web application for Exchange Lab. My contributions included UI polish, responsive design, and page development. The application features a landing page, test page, and registration page, all optimized for a smooth user experience across devices, and was implemented in two languages: Arabic and French',
    thumbnailImage: '/projects/project-1/background.png',
    screenshots: [
      { src: '/projects/project-1/1.png', alt: 'Game interface' },
      { src: '/projects/project-1/2.png', alt: 'Chat system' },
      { src: '/projects/project-1/3.png', alt: 'Chat system' },
      { src: '/projects/project-1/4.png', alt: 'Chat system' },
      { src: '/projects/project-1/5.png', alt: 'Chat system' },
      { src: '/projects/project-1/6.png', alt: 'Chat system' },
    ],
    website: "https://www.xchangelab.info/fr"
  },
  {
    id: 2,
    slug: 'ft-transcendence',
    title: 'FT_Transcendence',
    tagline: 'Real-time multiplayer Pong game with authentication & chat',
    role: 'Full Stack Developer',
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
    website: "https://github.com/mouaammou/ft_transcendence"
  },

  {
    id: 4,
    slug: 'Exchange-lab-dashboard',
    title: 'Exchange lab — Dashboard',
    tagline: 'school management system',
    role: 'Full stack Developer',
    description:
      'Developed a complete school management system (Next.js + Supabase) including dashboards, role-based access, and attendance tooling. Integrated the Moodle API to automate course assignment and student registration. Built responsive landing pages and UI components following modern design practices. Implemented real-time statistics dashboards using Supabase.',
    thumbnailImage: '/projects/project-4/background.png',
    screenshots: [
      { src: '/projects/project-4/1.png', alt: 'Game interface' },
      { src: '/projects/project-4/2.png', alt: 'Chat system' },
      { src: '/projects/project-4/3.png', alt: 'Chat system' },
      { src: '/projects/project-4/4.png', alt: 'Chat system' },
      { src: '/projects/project-4/5.png', alt: 'Chat system' },
      { src: '/projects/project-4/6.png', alt: 'Chat system' },
    ],
    website: null
  },


  {
    id: 3,
    slug: 'Nassme App landing page',
    title: 'Nassem user friendly landing page',
    tagline: 'Nextjs customized landing page',
    role: 'Front-end Stack Developer',
    description:
      'Build a full customize landing page for Nassem application, with other important components , contact us, applications features, following the nextjs best practice, and optimizing SEO',
    thumbnailImage: '/projects/project-3/background.png',
    screenshots: [
      { src: '/projects/project-3/1.png', alt: 'Game interface' },
      { src: '/projects/project-3/2.png', alt: 'Chat system' },
      { src: '/projects/project-3/3.png', alt: 'Chat system' },
      { src: '/projects/project-3/4.png', alt: 'Chat system' },
      { src: '/projects/project-3/5.png', alt: 'Chat system' },
      { src: '/projects/project-3/6.png', alt: 'Chat system' },
    ],
    website: "https://nassem.vercel.app/"
  },

  {
    id: 5,
    slug: 'Ai-agent',
    title: 'AI Agent Theme Generator',
    tagline: 'AI-powered agent for dynamic theme generation',
    role: 'Full Stack Developer',
    description:
      'Developed an AI-powered agent using Next.js, Supabase, V0 API, and Gemini API. Implemented secure authentication, subscription logic, automated billing triggers, and real-time usage tracking for theme generation.',
    thumbnailImage: '/projects/project-5/background.png',
    screenshots: [
      { src: '/projects/project-5/1.png', alt: 'Game interface' },
      { src: '/projects/project-5/3.png', alt: 'Chat system' },
      { src: '/projects/project-5/4.png', alt: 'Chat system' },
      { src: '/projects/project-5/5.png', alt: 'Chat system' },
      { src: '/projects/project-5/6.png', alt: 'Chat system' },
      { src: '/projects/project-5/7.png', alt: 'Chat system' },
    ],
    website: "https://www.codro.dev/"
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}