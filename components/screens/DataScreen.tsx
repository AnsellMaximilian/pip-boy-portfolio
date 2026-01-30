import React, { useState } from 'react';
import { DataSubTab, Quest, ProjectItem, Achievement } from '../../types';
import { QUESTS, PROJECTS, ACHIEVEMENTS } from '../../data';
import { CheckSquare, Square, Wrench, Trophy, Calendar, ExternalLink } from 'lucide-react';

interface DataScreenProps {
  activeSubTab: DataSubTab;
}

const DataScreen: React.FC<DataScreenProps> = ({ activeSubTab }) => {
  if (activeSubTab === 'QUESTS') {
    return <QuestsView />;
  }
  if (activeSubTab === 'PROJECTS') {
    return <ProjectsView />;
  }
  if (activeSubTab === 'ACHIEVEMENTS') {
    return <AchievementsView />;
  }
  return <div className="p-8 text-center animate-pulse">DATA CORRUPTED OR UNAVAILABLE</div>;
};

const QuestsView: React.FC = () => {
  const [selectedQuest, setSelectedQuest] = useState<Quest>(QUESTS[0]);

  return (
    <div className="flex flex-col md:flex-row h-full gap-4 overflow-hidden">
      {/* Quest List */}
      <div className="
        w-full h-1/3 md:h-full md:w-[30%] 
        flex flex-col 
        border-b-2 md:border-b-0 md:border-r-2 border-pip/30 
        pb-2 md:pb-0 md:pr-2 
        overflow-y-auto shrink-0
      ">
        {QUESTS.map((quest) => (
          <button
            key={quest.id}
            onClick={() => setSelectedQuest(quest)}
            className={`w-full text-left p-3 mb-1 font-mono uppercase transition-all duration-100 border-l-4 shrink-0 ${
              selectedQuest.id === quest.id 
                ? 'bg-pip/20 border-pip text-pip font-bold shadow-[0_0_10px_rgba(16,185,129,0.2)]' 
                : 'border-transparent text-pip/70 hover:bg-pip/10 hover:text-pip hover:border-pip/50'
            }`}
          >
            <div className="flex items-center gap-2">
                <span className={`w-3 h-3 bg-pip ${selectedQuest.id === quest.id ? 'animate-pulse' : 'opacity-0'}`}></span>
                {quest.title}
            </div>
          </button>
        ))}
      </div>

      {/* Quest Detail */}
      <div className="
        w-full h-2/3 md:h-full md:w-[70%] 
        flex flex-col 
        p-2 text-pip font-mono 
        overflow-y-auto
      ">
        <div className="flex justify-between items-end border-b-2 border-pip mb-4 pb-2 shrink-0">
           <h2 className="text-xl md:text-2xl font-bold uppercase">{selectedQuest.title}</h2>
           {selectedQuest.status === 'completed' && <span className="bg-pip text-black px-2 text-xs md:text-sm font-bold">COMPLETED</span>}
        </div>

        {/* Quest Image / Visual Placeholder */}
        <div className="mb-4 bg-pip/10 p-4 border border-pip/30 rounded min-h-[80px] shrink-0">
            <p className="text-lg italic leading-relaxed">"{selectedQuest.summary}"</p>
        </div>
        
        <p className="mb-6 opacity-90 text-lg">{selectedQuest.description}</p>

        <div className="mt-auto">
            <h3 className="text-xl border-b border-pip/50 mb-3 pb-1">OBJECTIVES</h3>
            <ul className="space-y-3 pb-4">
                {selectedQuest.steps.map((step, idx) => (
                    <li key={idx} className={`flex items-start gap-3 text-lg ${step.completed ? 'opacity-50' : 'opacity-100'}`}>
                        <div className="mt-1 flex-shrink-0">
                            {step.completed ? <CheckSquare size={20} /> : <Square size={20} />}
                        </div>
                        <span>{step.text}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
};

const ProjectsView: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectItem>(PROJECTS[0]);
  
    return (
      <div className="flex flex-col md:flex-row h-full gap-4 overflow-hidden">
        {/* Project List */}
        <div className="
            w-full h-1/3 md:h-full md:w-[30%] 
            flex flex-col 
            border-b-2 md:border-b-0 md:border-r-2 border-pip/30 
            pb-2 md:pb-0 md:pr-2 
            overflow-y-auto shrink-0
        ">
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`w-full text-left p-3 mb-1 font-mono uppercase transition-all duration-100 border-l-4 shrink-0 ${
                selectedProject.id === project.id 
                  ? 'bg-pip/20 border-pip text-pip font-bold shadow-[0_0_10px_rgba(16,185,129,0.2)]' 
                  : 'border-transparent text-pip/70 hover:bg-pip/10 hover:text-pip hover:border-pip/50'
              }`}
            >
               <div className="flex items-center gap-2">
                 <Wrench size={16} />
                 {project.title}
               </div>
            </button>
          ))}
        </div>
  
        {/* Project Detail */}
        <div className="
            w-full h-2/3 md:h-full md:w-[70%] 
            flex flex-col 
            p-2 text-pip font-mono 
            overflow-y-auto
        ">
           <div className="border-b-2 border-pip mb-4 pb-2 shrink-0">
             <h2 className="text-xl md:text-2xl font-bold uppercase">{selectedProject.title}</h2>
             <span className="text-sm opacity-60">FEATURED PROJECT</span>
           </div>

           <div className="flex flex-wrap gap-2 mb-6 shrink-0">
               {selectedProject.tech.map(t => (
                   <span key={t} className="px-2 py-1 border border-pip/50 text-sm bg-pip/10 rounded">
                       {t}
                   </span>
               ))}
           </div>

           <div className="p-4 border-2 border-dashed border-pip/30 rounded bg-pip/5 mb-4 shrink-0">
               <p className="text-lg leading-relaxed">{selectedProject.description}</p>
           </div>
           
           <div className="mt-auto flex justify-end pb-4">
             {selectedProject.link ? (
               <a 
                 href={selectedProject.link}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center gap-2 bg-pip text-black px-4 py-2 font-bold hover:bg-pip-light transition-colors"
               >
                 <span>ACCESS TERMINAL</span>
                 <ExternalLink size={16} />
               </a>
             ) : (
               <div className="animate-pulse text-sm">[ LINK UNAVAILABLE ]</div>
             )}
           </div>
        </div>
      </div>
    );
};

const AchievementsView: React.FC = () => {
    return (
        <div className="h-full overflow-y-auto pr-2 text-pip">
            <div className="grid grid-cols-1 gap-4 pb-4">
                {ACHIEVEMENTS.map((ach) => (
                    <div key={ach.id} className="border border-pip/40 p-4 bg-pip/5 flex flex-col sm:flex-row gap-4 hover:bg-pip/10 transition-colors">
                        <div className="flex-shrink-0 flex items-start justify-center pt-1">
                            <Trophy size={40} className="text-pip" strokeWidth={1.5} />
                        </div>
                        <div className="flex-grow">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="text-xl font-bold uppercase text-pip">{ach.title}</h3>
                                <span className="text-sm border border-pip px-1">{ach.rank}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm opacity-70 mb-2">
                                <Calendar size={14} />
                                <span>{ach.event}</span>
                                <span>•</span>
                                <span>{ach.date}</span>
                            </div>
                            <p className="text-lg opacity-90">{ach.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DataScreen;