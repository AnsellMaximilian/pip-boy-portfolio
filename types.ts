export interface Skill {
  id: string;
  name: string;
  level: number;
  description: string;
  iconName: string; // Mapping to lucide icon
}

export interface Perk {
  id: string;
  name: string;
  rank: number;
  maxRank: number;
  description: string;
  iconName: string;
}

export interface QuestStep {
  text: string;
  completed: boolean;
}

export interface Quest {
  id: string;
  title: string;
  summary: string; // The short text shown in list
  description: string; // Full text on right
  steps: QuestStep[];
  date: string;
  status: 'active' | 'completed';
}

export interface InventoryItem {
  id: string;
  name: string;
  damage: number; // Used for "Impact" of project
  weight: number; // Used for "Size" or complexity
  value: number;
  description: string;
  tags: string[];
}

// Navigation Types
export type MainTab = 'STAT' | 'INV' | 'DATA' | 'MAP' | 'RADIO';
export type StatSubTab = 'STATUS' | 'SPECIAL' | 'PERKS';
export type DataSubTab = 'QUESTS' | 'WORKSHOPS' | 'STATS';
export type InvSubTab = 'WEAPONS' | 'APPAREL' | 'AID' | 'MISC';
