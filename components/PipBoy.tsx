import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MainTab, StatSubTab, DataSubTab, InvSubTab } from '../types';
import StatScreen from './screens/StatScreen';
import DataScreen from './screens/DataScreen';
import InvScreen from './screens/InvScreen';
import RadioScreen from './screens/RadioScreen';

// Main Tabs Config
const TABS: MainTab[] = ['STAT', 'DATA', 'INV', 'MAP', 'RADIO'];

const PipBoy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MainTab>('STAT');
  
  // Sub-tabs State
  const [statSub, setStatSub] = useState<StatSubTab>('STATUS');
  const [invSub, setInvSub] = useState<InvSubTab>('WEAPONS');
  const [dataSub, setDataSub] = useState<DataSubTab>('QUESTS');

  // Render Sub Navigation based on active Tab
  const renderSubNav = () => {
    switch (activeTab) {
      case 'STAT':
        return (
          <div className="flex gap-6 mb-4 text-xl overflow-x-auto scrollbar-hide">
            {(['STATUS', 'SPECIAL', 'PERKS'] as StatSubTab[]).map((sub) => (
              <button
                key={sub}
                onClick={() => setStatSub(sub)}
                className={`uppercase transition-colors whitespace-nowrap ${statSub === sub ? 'text-pip font-bold drop-shadow-[0_0_5px_rgba(16,185,129,0.8)]' : 'text-pip/40 hover:text-pip/70'}`}
              >
                {sub}
              </button>
            ))}
          </div>
        );
      case 'INV':
        return (
          <div className="flex gap-6 mb-4 text-xl overflow-x-auto scrollbar-hide">
             {(['WEAPONS', 'APPAREL', 'AID', 'MISC'] as InvSubTab[]).map((sub) => (
              <button
                key={sub}
                onClick={() => setInvSub(sub)}
                className={`uppercase transition-colors whitespace-nowrap ${invSub === sub ? 'text-pip font-bold drop-shadow-[0_0_5px_rgba(16,185,129,0.8)]' : 'text-pip/40 hover:text-pip/70'}`}
              >
                {sub}
              </button>
            ))}
          </div>
        );
      case 'DATA':
         return (
          <div className="flex gap-6 mb-4 text-xl overflow-x-auto scrollbar-hide">
             {(['QUESTS', 'PROJECTS', 'ACHIEVEMENTS'] as DataSubTab[]).map((sub) => (
              <button
                key={sub}
                onClick={() => setDataSub(sub)}
                className={`uppercase transition-colors whitespace-nowrap ${dataSub === sub ? 'text-pip font-bold drop-shadow-[0_0_5px_rgba(16,185,129,0.8)]' : 'text-pip/40 hover:text-pip/70'}`}
              >
                {sub}
              </button>
            ))}
          </div>
        );
      default:
        return <div className="h-8 mb-4"></div>;
    }
  };

  return (
    <div className="w-full h-screen flex flex-col bg-black font-mono relative p-4 sm:p-6 overflow-hidden">
      
      {/* TOP NAVIGATION */}
      <nav className="flex justify-between items-end border-b-2 border-pip pb-1 mb-2 px-2 sm:px-4 relative z-10">
        <div className="flex gap-4 sm:gap-8 w-full overflow-x-auto scrollbar-hide">
          {TABS.map((tab) => (
            <div key={tab} className="relative group shrink-0">
              <button
                onClick={() => setActiveTab(tab)}
                className={`text-xl sm:text-2xl font-bold uppercase px-2 py-1 z-20 relative transition-opacity ${
                  activeTab === tab ? 'text-pip opacity-100' : 'text-pip opacity-50 hover:opacity-80'
                }`}
              >
                {tab}
              </button>
              {activeTab === tab && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-[6px] h-[3px] bg-pip shadow-[0_0_10px_#10b981]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </div>
          ))}
        </div>
        <div className="hidden md:block text-pip text-sm font-bold opacity-80 pt-2 shrink-0 ml-4">
            PIP-BOY 3000
        </div>
      </nav>

      {/* SUB NAVIGATION */}
      <div className="px-2 sm:px-6 relative z-10 min-h-[3rem]">
          {renderSubNav()}
      </div>

      {/* MAIN SCREEN AREA */}
      <main className="flex-1 overflow-hidden relative border-2 border-pip/20 mx-0 sm:mx-4 mb-2 p-2 sm:p-4 bg-[rgba(16,185,129,0.02)] shadow-inner">
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab + (activeTab === 'STAT' ? statSub : activeTab === 'DATA' ? dataSub : invSub)}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
             {activeTab === 'STAT' && <StatScreen activeSubTab={statSub} />}
             {activeTab === 'DATA' && <DataScreen activeSubTab={dataSub} />}
             {activeTab === 'INV' && <InvScreen activeSubTab={invSub} />}
             {activeTab === 'RADIO' && <RadioScreen />}
             {activeTab === 'MAP' && (
                <div className="h-full flex items-center justify-center text-pip opacity-50 text-2xl animate-pulse">
                    MODULE NOT INSTALLED
                </div>
             )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FOOTER STATS */}
      <footer className="h-12 flex justify-between items-center px-2 sm:px-6 text-pip font-bold text-lg sm:text-xl border-t-2 border-pip/50 mx-0 sm:mx-4 bg-black relative z-10 shrink-0">
         <div className="flex items-center gap-2">
            <div className="bg-pip text-black px-1 text-sm">HP</div>
            <div className="w-16 sm:w-32 h-4 border border-pip p-0.5">
                <div className="h-full bg-pip w-[85%] animate-pulse"></div>
            </div>
            <span className="text-sm sm:text-base">85/100</span>
         </div>

         <div className="hidden sm:flex items-center gap-2">
            <span>LEVEL 24</span>
            <div className="w-24 sm:w-48 h-2 border border-pip p-0.5 mx-2">
                 <div className="h-full bg-pip w-[60%]"></div>
            </div>
         </div>

         <div className="flex items-center gap-2">
            <div className="bg-pip text-black px-1 text-sm">AP</div>
            <div className="w-16 sm:w-32 h-4 border border-pip p-0.5">
                <div className="h-full bg-pip w-[90%]"></div>
            </div>
            <span className="text-sm sm:text-base">90/100</span>
         </div>
      </footer>

    </div>
  );
};

export default PipBoy;