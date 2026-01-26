import React, { useState } from 'react';
import { DataSubTab, Quest } from '../../types';
import { QUESTS } from '../../data';
import { CheckSquare, Square } from 'lucide-react';

interface DataScreenProps {
  activeSubTab: DataSubTab;
}

const DataScreen: React.FC<DataScreenProps> = ({ activeSubTab }) => {
  if (activeSubTab === 'QUESTS') {
    return <QuestsView />;
  }
  return <div className="p-8 text-center animate-pulse">DATA CORRUPTED OR UNAVAILABLE</div>;
};

const QuestsView: React.FC = () => {
  const [selectedQuest, setSelectedQuest] = useState<Quest>(QUESTS[0]);

  return (
    <div className="flex flex-col md:flex-row h-full gap-4">
      {/* Quest List */}
      <div className="w-full md:w-5/12 flex flex-col border-r-2 border-pip/30 pr-2 overflow-y-auto">
        {QUESTS.map((quest) => (
          <button
            key={quest.id}
            onClick={() => setSelectedQuest(quest)}
            className={`w-full text-left p-3 mb-1 font-mono uppercase transition-all duration-100 border-l-4 ${
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
      <div className="w-full md:w-7/12 flex flex-col p-2 text-pip font-mono">
        <div className="flex justify-between items-end border-b-2 border-pip mb-4 pb-2">
           <h2 className="text-2xl font-bold uppercase">{selectedQuest.title}</h2>
           {selectedQuest.status === 'completed' && <span className="bg-pip text-black px-2 text-sm font-bold">COMPLETED</span>}
        </div>

        {/* Quest Image / Visual Placeholder */}
        <div className="mb-4 bg-pip/10 p-4 border border-pip/30 rounded min-h-[100px]">
            <p className="text-lg italic leading-relaxed">"{selectedQuest.summary}"</p>
        </div>
        
        <p className="mb-6 opacity-90 text-lg">{selectedQuest.description}</p>

        <div className="mt-auto">
            <h3 className="text-xl border-b border-pip/50 mb-3 pb-1">OBJECTIVES</h3>
            <ul className="space-y-3">
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
        
        <div className="mt-8 text-right text-sm opacity-60">
             DATE STARTED: {selectedQuest.date}
        </div>
      </div>
    </div>
  );
};

export default DataScreen;