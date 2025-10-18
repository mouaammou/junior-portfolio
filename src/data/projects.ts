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
    tagline: 'Real-time multiplayer Pong game with chat functionality',
    role: 'Full Stack Developer',
    description:
      'A web application that allows users to play Pong against each other in real-time. Features include user authentication, friend system, chat rooms, and live game sessions.',
    thumbnailImage: '/project-1.jpg',
    screenshots: [
      { src: '/project-1.jpg', alt: 'Game interface' },
      { src: '/project-2.jpg', alt: 'Chat system' },
      { src: '/project-2.jpg', alt: 'Chat system' },
      { src: '/project-2.jpg', alt: 'Chat system' },
    ],
  },
  {
    id: 2,
    slug: 'ocp-maintenance',
    title: 'OCP - MAINTENANCE SOLUTIONS',
    tagline: 'Enterprise maintenance management system',
    role: 'Frontend Developer',
    description:
      'A comprehensive solution for managing maintenance operations at OCP. The platform includes scheduling, inventory management, work order processing, and analytics dashboard.',
    thumbnailImage: '/project-2.jpg',
    screenshots: [
      { src: '/ocp-maintenance-1.jpg', alt: 'Dashboard view' },
      { src: '/ocp-maintenance-2.jpg', alt: 'Maintenance schedule' },
    ],
  },
  {
    id: 3,
    slug: 'mariam ai',
    title: 'OCP - MAINTENANCE SOLUTIONS',
    tagline: 'Enterprise maintenance management system',
    role: 'Frontend Developer',
    description:
      'A comprehensive solution for managing maintenance operations at OCP. The platform includes scheduling, inventory management, work order processing, and analytics dashboard.',
    thumbnailImage: '/project-3.jpg',
    screenshots: [
      { src: '/ocp-maintenance-1.jpg', alt: 'Dashboard view' },
      { src: '/ocp-maintenance-2.jpg', alt: 'Maintenance schedule' },
    ],
  },
  {
    id: 4,
    slug: 'onboarding flow',
    title: 'OCP - MAINTENANCE SOLUTIONS',
    tagline: 'Enterprise maintenance management system',
    role: 'Frontend Developer',
    description:
      'A comprehensive solution for managing maintenance operations at OCP. The platform includes scheduling, inventory management, work order processing, and analytics dashboard.',
    thumbnailImage: '/project-4.jpg',
    screenshots: [
      { src: '/ocp-maintenance-1.jpg', alt: 'Dashboard view' },
      { src: '/ocp-maintenance-2.jpg', alt: 'Maintenance schedule' },
    ],
  }
  , {
    id: 4,
    slug: 'onboarding flow',
    title: 'OCP - MAINTENANCE SOLUTIONS',
    tagline: 'Enterprise maintenance management system',
    role: 'Frontend Developer',
    description:
      'A comprehensive solution for managing maintenance operations at OCP. The platform includes scheduling, inventory management, work order processing, and analytics dashboard.',
    thumbnailImage: '/project-4.jpg',
    screenshots: [
      { src: '/ocp-maintenance-1.jpg', alt: 'Dashboard view' },
      { src: '/ocp-maintenance-2.jpg', alt: 'Maintenance schedule' },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}