import React, { useState } from 'react';
import { StatSubTab, Skill, Perk } from '../../types';
import { SKILLS, PERKS } from '../../data';
import { 
  Layout, Eye, Server, Smile, Brain, Zap, Clover, Cloud, Users, Palette, Shield,
  User, Code, Terminal, Database, Box, PenTool, Layers, Bug, Atom, Award, ExternalLink
} from 'lucide-react';

const PROGRAMMER_BOY_URL = "https://image2url.com/r2/default/images/1769410393270-040d283e-251e-48ff-8871-1a0bea0a1540.png";

interface StatScreenProps {
  activeSubTab: StatSubTab;
}

const StatScreen: React.FC<StatScreenProps> = ({ activeSubTab }) => {
  if (activeSubTab === 'STATUS') {
    return <StatusView />;
  }
  if (activeSubTab === 'SPECIAL') {
    return <SpecialView />;
  }
  if (activeSubTab === 'PERKS') {
    return <PerksView />;
  }
  return <div className="p-8 text-center animate-pulse">MODULE OFFLINE</div>;
};

// Icon mapper
const IconMap: Record<string, React.ElementType> = {
  Layout, Eye, Server, Smile, Brain, Zap, Clover, Cloud, Users, Palette, Shield,
  Code, Terminal, Database, Box, PenTool, Layers, Bug, Atom, Award
};

const StatusView: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col items-center justify-between h-full py-2 relative overflow-hidden">
       
       {/* Top Summary */}
       <div className="text-center space-y-1 z-10 w-full border-b border-pip/20 pb-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-widest text-pip drop-shadow-[0_0_5px_rgba(16,185,129,0.8)]">
            SOFTWARE ENGINEER
          </h2>
       </div>

       {/* Center Character Area */}
       <div className="flex-1 w-full flex items-center justify-center relative my-1 min-h-0">
          
          {/* Background Reticle Lines */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
             {/* Main Circle - Scaled up but constrained by height */}
             <div className="w-48 h-48 max-w-[40vh] max-h-[40vh] sm:w-[28rem] sm:h-[28rem] sm:max-w-[60vh] sm:max-h-[60vh] border border-pip/20 rounded-full animate-pulse"></div>
             {/* Crosshairs */}
             <div className="absolute w-[120%] h-[1px] bg-pip/20"></div>
             <div className="absolute w-[1px] h-[120%] bg-pip/20"></div>
             {/* Inner decorative circle */}
             <div className="absolute w-32 h-32 max-w-[30vh] max-h-[30vh] sm:w-80 sm:h-80 sm:max-w-[50vh] sm:max-h-[50vh] border border-pip/10 rounded-full"></div>
          </div>

          {/* Character Image Container - Responsive with max-height constraints */}
          <div className="relative z-10 h-40 w-40 max-h-[35vh] max-w-[35vh] sm:h-96 sm:w-96 sm:max-h-[55vh] sm:max-w-[55vh] flex items-center justify-center">
             {!imgError ? (
               <img 
                 src={PROGRAMMER_BOY_URL} 
                 alt="Programmer Character"
                 className="h-full w-full object-contain animate-flicker"
                 style={{
                    // Filter turns white content to Pip-Boy green (#10b981)
                    filter: 'brightness(0) saturate(100%) invert(58%) sepia(87%) saturate(365%) hue-rotate(101deg) brightness(92%) contrast(92%) drop-shadow(0 0 5px rgba(16,185,129,0.5))',
                    maskImage: 'repeating-linear-gradient(black, black 2px, transparent 3px)',
                    WebkitMaskImage: 'repeating-linear-gradient(black, black 2px, transparent 3px)',
                    opacity: 0.9
                 }}
                 onError={() => setImgError(true)}
               />
             ) : (
               <div className="flex flex-col items-center justify-center animate-flicker opacity-80 text-pip h-full w-full p-4">
                  <User className="w-full h-full drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]" strokeWidth={1} />
               </div>
             )}
          </div>
       </div>

       {/* Bottom Section: Description & Name */}
       <div className="w-full flex flex-col items-center space-y-2 sm:space-y-4 z-10 mb-2 sm:mb-6 shrink-0">
          
          {/* Description */}
          <div className="w-full max-w-2xl text-center px-4">
             <p className="text-pip text-sm sm:text-xl font-mono leading-relaxed opacity-90 drop-shadow-[0_0_2px_rgba(16,185,129,0.5)]">
                "Specializing in building (and occasionally designing) exceptional digital experiences. Currently focused on building accessible, human-centered products."
             </p>
          </div>

          {/* Name Display */}
          <div className="text-xl sm:text-3xl font-bold uppercase tracking-[0.2em] text-pip drop-shadow-[0_0_8px_rgba(16,185,129,1)]">
             ANSELL MAXIMILIAN
          </div>
       </div>

    </div>
  )
}

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
           {selectedSkill.logoUrl ? (
             <img 
                src={selectedSkill.logoUrl} 
                alt={selectedSkill.name}
                className="w-32 h-32 sm:w-40 sm:h-40 object-contain animate-pulse-fast drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                style={{
                  // The magic green filter
                  filter: 'brightness(0) saturate(100%) invert(58%) sepia(87%) saturate(365%) hue-rotate(101deg) brightness(92%) contrast(92%) drop-shadow(0 0 5px rgba(16,185,129,0.8))'
                }}
             />
           ) : (
             <CurrentIcon size={120} strokeWidth={1.5} className="animate-pulse-fast drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
           )}
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
          <div className="w-full md:w-1/2 flex flex-col gap-1 pr-2 border-r-2 border-pip/30 overflow-y-auto">
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
              <div className="w-full border-2 border-pip p-4 bg-pip/5 rounded relative">
                <h3 className="text-xl font-bold mb-1 border-b border-pip/50 pb-2">{selectedPerk.name}</h3>
                
                {selectedPerk.issuer && (
                   <div className="text-sm opacity-70 mb-2 uppercase tracking-wide">
                      Issuer: {selectedPerk.issuer}
                   </div>
                )}

                <div className="flex mb-2 text-pip-light">
                    {[...Array(selectedPerk.maxRank)].map((_, i) => (
                         <span key={i} className="text-2xl mr-1">{i < selectedPerk.rank ? '★' : '☆'}</span>
                    ))}
                </div>
                <p className="text-lg mb-4">{selectedPerk.description}</p>
                
                {selectedPerk.link && (
                    <a 
                      href={selectedPerk.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-pip text-black px-4 py-1 text-lg font-bold hover:bg-pip-light transition-colors uppercase"
                    >
                       Access Certificate <ExternalLink size={16} />
                    </a>
                )}
              </div>
          </div>
      </div>
    </div>
  );
};

export default StatScreen;