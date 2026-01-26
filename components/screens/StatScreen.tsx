import React, { useState } from 'react';
import { StatSubTab, Skill, Perk } from '../../types';
import { SKILLS, PERKS } from '../../data';
import { Layout, Eye, Server, Smile, Brain, Zap, Clover, Cloud, Users, Palette, Shield } from 'lucide-react';

interface StatScreenProps {
  activeSubTab: StatSubTab;
}

const StatScreen: React.FC<StatScreenProps> = ({ activeSubTab }) => {
  // We only implement SPECIAL and PERKS for this demo
  if (activeSubTab === 'SPECIAL') {
    return <SpecialView />;
  }
  if (activeSubTab === 'PERKS') {
    return <PerksView />;
  }
  return <div className="p-8 text-center animate-pulse">STATUS MODULE OFFLINE / USE 'SPECIAL'</div>;
};

// Icon mapper
const IconMap: Record<string, React.ElementType> = {
  Layout, Eye, Server, Smile, Brain, Zap, Clover, Cloud, Users, Palette, Shield
};

const SpecialView: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill>(SKILLS[0]);

  const CurrentIcon = IconMap[selectedSkill.iconName] || Shield;

  return (
    <div className="flex flex-col md:flex-row h-full gap-4">
      {/* List Column */}
      <div className="w-full md:w-1/2 flex flex-col gap-1 pr-2 border-r-2 border-pip/30 overflow-y-auto max-h-[60vh] md:max-h-full scrollbar-hide">
        {SKILLS.map((skill) => (
          <button
            key={skill.id}
            onClick={() => setSelectedSkill(skill)}
            className={`flex justify-between items-center p-2 font-mono uppercase text-lg sm:text-xl hover:bg-pip hover:text-pip-bg transition-colors duration-200 ${
              selectedSkill.id === skill.id ? 'bg-pip text-pip-bg' : 'text-pip'
            }`}
          >
            <span>{skill.name}</span>
            <span>{skill.level}</span>
          </button>
        ))}
      </div>

      {/* Detail Column */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-start p-4 text-pip">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 mb-6 flex items-center justify-center border-4 border-pip rounded-full p-8 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
           <CurrentIcon size={120} strokeWidth={1.5} className="animate-pulse-fast drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
        </div>
        
        <div className="w-full text-left">
           <div className="text-2xl font-bold mb-4 uppercase border-b-2 border-pip pb-1">{selectedSkill.name}</div>
           <p className="text-lg leading-relaxed opacity-90">{selectedSkill.description}</p>
        </div>
      </div>
    </div>
  );
};

const PerksView: React.FC = () => {
  const [selectedPerk, setSelectedPerk] = useState<Perk>(PERKS[0]);
  const CurrentIcon = IconMap[selectedPerk.iconName] || Shield;

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="flex flex-col md:flex-row h-full gap-4">
          <div className="w-full md:w-1/2 flex flex-col gap-1 pr-2 border-r-2 border-pip/30">
            {PERKS.map((perk) => (
              <button
                key={perk.id}
                onClick={() => setSelectedPerk(perk)}
                className={`flex justify-between items-center p-2 font-mono uppercase text-lg sm:text-xl hover:bg-pip hover:text-pip-bg transition-colors ${
                  selectedPerk.id === perk.id ? 'bg-pip text-pip-bg' : 'text-pip'
                }`}
              >
                <span>{perk.name}</span>
                <div className="flex text-sm">
                  {[...Array(perk.maxRank)].map((_, i) => (
                     <span key={i} className={`ml-1 ${i < perk.rank ? 'text-current' : 'opacity-30'}`}>★</span>
                  ))}
                </div>
              </button>
            ))}
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center p-4 text-pip">
              <div className="mb-4">
                 <CurrentIcon size={100} className="animate-flicker" />
              </div>
              <div className="w-full border-2 border-pip p-4 bg-pip/5 rounded">
                <h3 className="text-xl font-bold mb-2 border-b border-pip/50 pb-2">{selectedPerk.name}</h3>
                <div className="flex mb-2 text-pip-light">
                    {[...Array(selectedPerk.maxRank)].map((_, i) => (
                         <span key={i} className="text-2xl mr-1">{i < selectedPerk.rank ? '★' : '☆'}</span>
                    ))}
                </div>
                <p className="text-lg">{selectedPerk.description}</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default StatScreen;