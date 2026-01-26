import { Skill, Perk, Quest, InventoryItem } from './types';

export const SKILLS: Skill[] = [
  {
    id: 's-strength',
    name: 'Front-End',
    level: 8,
    description: "Strength is a measure of your raw coding power. It affects how much UI complexity you can carry and the damage of all CSS attacks.",
    iconName: 'Layout'
  },
  {
    id: 's-perception',
    name: 'TypeScript',
    level: 7,
    description: "Perception is your ability to catch bugs early. A high Perception grants better type safety and accuracy in V.A.T.S. (Visual Analysis Type System).",
    iconName: 'Eye'
  },
  {
    id: 's-endurance',
    name: 'Backend',
    level: 5,
    description: "Endurance is a measure of your server-side stamina. It affects your total HP (Hosting Power) and the AP drain from database queries.",
    iconName: 'Server'
  },
  {
    id: 's-charisma',
    name: 'Soft Skills',
    level: 9,
    description: "Charisma is your ability to charm stakeholders and lead teams. It affects your success in persuade attempts and prices in salary negotiations.",
    iconName: 'Smile'
  },
  {
    id: 's-intelligence',
    name: 'Problem Solving',
    level: 8,
    description: "Intelligence is a measure of your overall mental acuity. It affects the number of Experience Points earned from debugging and the rank of algorithms you can craft.",
    iconName: 'Brain'
  },
  {
    id: 's-agility',
    name: 'React',
    level: 9,
    description: "Agility is a measure of your reflex and finesse. It directly affects the number of Action Points in the Virtual DOM and your ability to render stealthily.",
    iconName: 'Zap'
  },
  {
    id: 's-luck',
    name: 'Deployment',
    level: 4,
    description: "Luck is a measure of your general good fortune. It affects the recharge rate of Critical Hits on Fridays and the chance of finding better loot in logs.",
    iconName: 'Clover'
  }
];

export const PERKS: Perk[] = [
  {
    id: 'p-aws',
    name: 'Cloud Wanderer',
    rank: 3,
    maxRank: 4,
    description: "You've spent years roaming the AWS wastelands. +20% damage to server costs and resistance to downtime radiation.",
    iconName: 'Cloud'
  },
  {
    id: 'p-scrum',
    name: 'Agile Master',
    rank: 2,
    maxRank: 2,
    description: "Your mastery of the sprint allows you to move 10% faster when deadlines approach. Unlocks 'Daily Standup' dialogue options.",
    iconName: 'Users'
  },
  {
    id: 'p-ui',
    name: 'Pixel Perfect',
    rank: 5,
    maxRank: 5,
    description: "Critical hits in CSS styling now cause target elements to align perfectly. +15% clearer interfaces.",
    iconName: 'Palette'
  }
];

export const QUESTS: Quest[] = [
  {
    id: 'q-current',
    title: 'Project: E-Commerce Overhaul',
    summary: "Refactor the legacy codebase for the 'SuperDuperMart' online portal.",
    description: "The client needs a complete overhaul of their storefront. The old system is irradiated with bugs. I need to migrate the frontend to Next.js and secure the payment gateway.",
    date: '10.23.2287',
    status: 'active',
    steps: [
      { text: 'Migrate React Class components to Hooks', completed: true },
      { text: 'Implement Stripe Payment Integration', completed: true },
      { text: 'Optimize Lighthouse score to 100', completed: false },
      { text: 'Deploy to Vercel production environment', completed: false }
    ]
  },
  {
    id: 'q-past-1',
    title: 'The Great Migration',
    summary: "Move the entire Vault-Tec database to a PostgreSQL cluster.",
    description: "Overseer requested a migration of user data. It was a treacherous journey through legacy SQL mountains.",
    date: '05.11.2285',
    status: 'completed',
    steps: [
      { text: 'Backup existing data holotapes', completed: true },
      { text: 'Design new schema for Dweller data', completed: true },
      { text: 'Verify data integrity with checksums', completed: true }
    ]
  },
  {
    id: 'q-edu',
    title: 'University Degree',
    summary: "Acquire the G.O.A.T. certification from the Institute.",
    description: "Completed a 4-year campaign at the University of Technology. Specialized in Artificial Intelligence and Web Systems.",
    date: '09.01.2280',
    status: 'completed',
    steps: [
      { text: 'Survive "Data Structures & Algorithms" dungeon', completed: true },
      { text: 'Defeat the Thesis Defense boss', completed: true },
      { text: 'Collect Diploma item', completed: true }
    ]
  }
];

export const ITEMS: InventoryItem[] = [
  {
    id: 'i-portfolio',
    name: 'Pip-Boy Portfolio',
    damage: 50,
    weight: 1.5,
    value: 1000,
    description: "A customized react application simulating a RobCo Pip-Boy interface. Highly radioactive style.",
    tags: ['React', 'Tailwind', 'Framer']
  },
  {
    id: 'i-saas',
    name: 'SaaS Starter Kit',
    damage: 85,
    weight: 5,
    value: 500,
    description: "A fully equipped starter kit for launching startups. Includes Auth, Database, and Payment modules.",
    tags: ['Next.js', 'Prisma', 'Stripe']
  }
];
