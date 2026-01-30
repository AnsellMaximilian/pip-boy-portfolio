
import { Skill, Perk, Quest, InventoryItem, ProjectItem, Achievement } from './types';

export const SKILLS: Skill[] = [
  {
    id: 's-js',
    name: 'JavaScript',
    level: 9,
    description: "The universal language of the web wasteland. Proficiency allows for complex logic crafting and DOM manipulation.",
    iconName: 'Code',
    logoUrl: 'https://cdn.simpleicons.org/javascript'
  },
  {
    id: 's-ts',
    name: 'TypeScript',
    level: 8,
    description: "A reinforced alloy of JavaScript. Grants +50% Bug Resistance and enables the 'Strict Mode' perk for safer coding.",
    iconName: 'Code',
    logoUrl: 'https://cdn.simpleicons.org/typescript'
  },
  {
    id: 's-react',
    name: 'React',
    level: 9,
    description: "Advanced component fabrication technology. Allows rapid construction of interactive UI interfaces with high durability.",
    iconName: 'Atom',
    logoUrl: 'https://cdn.simpleicons.org/react'
  },
  {
    id: 's-next',
    name: 'Next.js',
    level: 8,
    description: "Server-side rendering framework. significantly boosts SEO stats and reduces initial load times.",
    iconName: 'Zap',
    logoUrl: 'https://cdn.simpleicons.org/nextdotjs'
  },
  {
    id: 's-node',
    name: 'Node.js',
    level: 7,
    description: "Server-side runtime environment. Enables backend operations and asynchronous event handling outside the browser.",
    iconName: 'Server',
    logoUrl: 'https://cdn.simpleicons.org/nodedotjs'
  },
  {
    id: 's-python',
    name: 'Python',
    level: 6,
    description: "High-level scripting language known for readability. Effective for automation scripts and data analysis quests.",
    iconName: 'Terminal',
    logoUrl: 'https://cdn.simpleicons.org/python'
  },
  {
    id: 's-sql',
    name: 'PostgreSQL',
    level: 7,
    description: "Relational database management. Essential for structured data storage and complex query execution.",
    iconName: 'Database',
    logoUrl: 'https://cdn.simpleicons.org/postgresql'
  },
  {
    id: 's-docker',
    name: 'Docker',
    level: 5,
    description: "Containerization platform. Allows for consistent deployment environments across different servers.",
    iconName: 'Box',
    logoUrl: 'https://cdn.simpleicons.org/docker'
  },
  {
    id: 's-figma',
    name: 'Figma',
    level: 6,
    description: "Interface design tool. Used for blueprinting applications before construction begins.",
    iconName: 'PenTool',
    logoUrl: 'https://cdn.simpleicons.org/figma'
  }
];

export const PERKS: Perk[] = [
  {
    id: 'c-equitable',
    name: 'Equitable Elevation III',
    rank: 1,
    maxRank: 1,
    description: "Honorable Achievement Certificate recognizing dedication to equitable growth and elevation.",
    iconName: 'Award',
    issuer: 'Certopus',
    link: 'https://certopus.com/c/e32b60aec59244308869ed954e16d267'
  },
  {
    id: 'c-javascript',
    name: 'JavaScript (Basic)',
    rank: 1,
    maxRank: 1,
    description: "Certified competency in JavaScript language fundamentals, including functions, events, and error handling.",
    iconName: 'Code',
    issuer: 'HackerRank',
    link: 'https://www.hackerrank.com/certificates/559db4261ad4'
  },
  {
    id: 'c-react',
    name: 'React (Basic)',
    rank: 1,
    maxRank: 1,
    description: "Certified competency in React framework fundamentals, covering components, props, state, and lifecycle.",
    iconName: 'Atom',
    issuer: 'HackerRank',
    link: 'https://www.hackerrank.com/certificates/847db34c7fbe'
  },
  {
    id: 'p-fullstack',
    name: 'Full Stack Savant',
    rank: 3,
    maxRank: 3,
    description: "You are as comfortable in the DB as you are in CSS. +25% efficiency when working solo on projects.",
    iconName: 'Layers'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p-hashnomon',
    title: 'Hashnomon',
    tech: ['React', 'TypeScript', 'Web3'], 
    description: "A gamified platform inspired by classic creature collection games. Features unique mechanics for exploring the digital wilderness.",
    link: 'https://ansellmaximilian.vercel.app/projects/hashnomon'
  },
  {
    id: 'p-lunar',
    title: 'Lunar Editor',
    tech: ['TypeScript', 'Electron', 'React'],
    description: "A lightweight, aesthetically pleasing text editor designed for developers who value focus and minimalism.",
    link: 'https://ansellmaximilian.vercel.app/projects/lunar-editor'
  },
  {
    id: 'p-mading',
    title: 'Mading Live',
    tech: ['Next.js', 'Firebase', 'Tailwind'],
    description: "A modern digital wall magazine platform for schools. Enables real-time publishing of events, articles, and achievements.",
    link: 'https://ansellmaximilian.vercel.app/projects/mading-live'
  },
  {
    id: 'p-rsvquick',
    title: 'RSVQuick',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    description: "A streamlined event management solution. Create events and manage RSVPs with ease and efficiency.",
    link: 'https://ansellmaximilian.vercel.app/projects/rsvquick'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'a-hackcal',
    title: 'Grand Prize Winner',
    event: 'HackCal 2024',
    rank: '1st Place',
    date: '2024.02.15',
    description: "Awarded top honors for 'NeuroLink', a brain-computer interface simulator. Competed against 50+ teams."
  },
  {
    id: 'a-bearhack',
    title: 'Best UI/UX Design',
    event: 'BearHack 2023',
    rank: 'Special Category',
    date: '2023.11.10',
    description: "Recognized for exceptional interface design and user experience flow on 'Wasteland Map', a resource tracking app."
  },
  {
    id: 'a-calhacks',
    title: 'Competition Finalist',
    event: 'CalHacks 10.0',
    rank: 'Top 10',
    date: '2023.10.28',
    description: "Reached the finals with 'Pip-Boy-Web', an early prototype of this portfolio system."
  }
];

export const QUESTS: Quest[] = [
  {
    id: 'q-nexsoft',
    title: 'Android Developer',
    summary: 'PT Paramadaksa Teknologi Nusantara',
    description: "Contract role at nexSOFT. Responsible for analyzing FSDs and implementing Android solutions using Java. Coordinate with QC/QA for seamless testing and release preparation.",
    date: 'Jan 2024 - Present',
    status: 'active',
    steps: [
      { text: 'Analyze FSDs & Tech Solutions', completed: true },
      { text: 'Implement Change Requests (Java)', completed: true },
      { text: 'Coordinate w/ QA Teams', completed: true },
      { text: 'Release Prep & Regression Testing', completed: true }
    ]
  },
  {
    id: 'q-rumahsehat',
    title: 'Business System Dev',
    summary: 'Rumah Sehat',
    description: "Full-stack development for internal business systems. Managed requirements, design, and coding for sales, purchasing, and inventory modules.",
    date: 'Jul 2020 - Jan 2024',
    status: 'completed',
    steps: [
      { text: 'System Design (React, Node, Postgres)', completed: true },
      { text: 'Requirement Gathering & Analysis', completed: true },
      { text: 'Stock Reconciliation', completed: true },
      { text: 'Automate Weekly Invoicing (50+)', completed: true }
    ]
  },
  {
    id: 'q-matana',
    title: 'Information Systems',
    summary: 'Matana University',
    description: "Bachelor's degree in Management Information Systems. Graduated with a 3.85 GPA.",
    date: '2018 - 2022',
    status: 'completed',
    steps: [
      { text: 'Enterprise Resource Planning (ERP)', completed: true },
      { text: 'Relational Databases', completed: true },
      { text: 'Final Grade: 3.85', completed: true }
    ]
  }
];

export const ITEMS: InventoryItem[] = [
  {
    id: 'i-keyboard',
    name: 'Mech Keyboard',
    damage: 15,
    weight: 2,
    value: 150,
    description: "A rugged mechanical input device. Clicky switches cause +5 annoyance to nearby stealth units.",
    tags: ['Hardware', 'Input']
  },
  {
    id: 'i-coffee',
    name: 'Nuka-Caffeine',
    damage: 0,
    weight: 0.5,
    value: 20,
    description: "A glowing bottle of high-octane coffee. Restores 50 AP but reduces hydration.",
    tags: ['Aid', 'Consumable']
  }
];
