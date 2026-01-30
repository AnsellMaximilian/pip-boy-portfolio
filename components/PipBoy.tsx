import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MainTab, StatSubTab, DataSubTab } from '../types';
import StatScreen from './screens/StatScreen';
import DataScreen from './screens/DataScreen';
import RadioScreen from './screens/RadioScreen';
import MapScreen from './screens/MapScreen';

// Navigation Structure
type Section = {
    tab: MainTab;
    sub?: StatSubTab | DataSubTab;
};

const SECTIONS: Section[] = [
    { tab: 'STAT', sub: 'STATUS' },
    { tab: 'STAT', sub: 'SPECIAL' },
    { tab: 'STAT', sub: 'PERKS' },
    { tab: 'DATA', sub: 'QUESTS' },
    { tab: 'DATA', sub: 'PROJECTS' },
    { tab: 'DATA', sub: 'ACHIEVEMENTS' },
    { tab: 'MAP' },
    { tab: 'RADIO' },
];

const PipBoy: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [apCharge, setApCharge] = useState(0); // 0 to 100

  // Refs for scroll handling
  const scrollAccumulator = useRef(0);
  const lastScrollTime = useRef(0);
  const decayFrameId = useRef<number>(0);
  const SCROLL_THRESHOLD = 300; // Pixels of scroll needed to switch

  // Derived State
  const currentSection = SECTIONS[currentIndex];
  const activeTab = currentSection.tab;
  const activeSub = currentSection.sub;

  // Helper: Check if element is strictly scrollable (has overflow)
  // We ignore direction now; if you are in a scrollable container, navigation is disabled.
  const canScrollElement = (el: HTMLElement): boolean => {
      if (!el) return false;
      const style = window.getComputedStyle(el);
      const isScrollableStyle = style.overflowY === 'auto' || style.overflowY === 'scroll';
      // Add a small buffer (1px) to avoid false positives from sub-pixel rendering
      const hasOverflow = el.scrollHeight > el.clientHeight + 1;
      
      return isScrollableStyle && hasOverflow;
  };

  const isScrollableContext = (target: EventTarget | null): boolean => {
      let el = target as HTMLElement;
      // Traverse up to find if we are inside a scrollable container
      while (el && el !== document.body && el !== null) {
          if (canScrollElement(el)) {
              return true;
          }
          el = el.parentElement as HTMLElement;
      }
      return false;
  };

  // Scroll Handler
  useEffect(() => {
      const handleWheel = (e: WheelEvent) => {
          // Check if we are inside a scrollable area (list, detail view, etc)
          if (isScrollableContext(e.target)) {
              // If hovering over scrollable content, allow native scroll and BLOCK navigation accumulation
              scrollAccumulator.current = 0;
              setApCharge(0);
              return;
          }

          // Otherwise, hijack scroll for navigation
          lastScrollTime.current = Date.now();
          scrollAccumulator.current += e.deltaY;

          // Cap accumulator logic at edges of the menu system
          if (currentIndex === 0 && scrollAccumulator.current < 0) scrollAccumulator.current = 0;
          if (currentIndex === SECTIONS.length - 1 && scrollAccumulator.current > 0) scrollAccumulator.current = 0;

          const charge = Math.min(100, Math.abs(scrollAccumulator.current / SCROLL_THRESHOLD) * 100);
          setApCharge(charge);

          if (Math.abs(scrollAccumulator.current) >= SCROLL_THRESHOLD) {
              // Trigger Switch
              if (scrollAccumulator.current > 0) {
                 if (currentIndex < SECTIONS.length - 1) setCurrentIndex(prev => prev + 1);
              } else {
                 if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
              }
              scrollAccumulator.current = 0;
              setApCharge(0);
          }
      };

      window.addEventListener('wheel', handleWheel, { passive: false });
      
      // Decay Loop
      const decay = () => {
          const now = Date.now();
          if (now - lastScrollTime.current > 100 && Math.abs(scrollAccumulator.current) > 0) {
              // Decay speed
              scrollAccumulator.current *= 0.85; 
              if (Math.abs(scrollAccumulator.current) < 1) scrollAccumulator.current = 0;
              
              const charge = Math.min(100, Math.abs(scrollAccumulator.current / SCROLL_THRESHOLD) * 100);
              setApCharge(charge);
          }
          decayFrameId.current = requestAnimationFrame(decay);
      };
      decayFrameId.current = requestAnimationFrame(decay);

      return () => {
          window.removeEventListener('wheel', handleWheel);
          cancelAnimationFrame(decayFrameId.current);
      };
  }, [currentIndex]);

  // Manual Tab Click Handler
  const handleTabClick = (tab: MainTab) => {
      const index = SECTIONS.findIndex(s => s.tab === tab);
      if (index !== -1) setCurrentIndex(index);
  };

  // Manual SubTab Click Handler
  const handleSubClick = (sub: StatSubTab | DataSubTab) => {
      const index = SECTIONS.findIndex(s => s.sub === sub);
      if (index !== -1) setCurrentIndex(index);
  };

  // Render Sub Navigation based on active Tab
  const renderSubNav = () => {
    switch (activeTab) {
      case 'STAT':
        return (
          <div className="flex gap-6 mb-4 text-xl overflow-x-auto scrollbar-hide">
            {(['STATUS', 'SPECIAL', 'PERKS'] as StatSubTab[]).map((sub) => (
              <button
                key={sub}
                onClick={() => handleSubClick(sub)}
                className={`uppercase transition-colors whitespace-nowrap ${activeSub === sub ? 'text-pip font-bold drop-shadow-[0_0_5px_rgba(16,185,129,0.8)]' : 'text-pip/40 hover:text-pip/70'}`}
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
                onClick={() => handleSubClick(sub)}
                className={`uppercase transition-colors whitespace-nowrap ${activeSub === sub ? 'text-pip font-bold drop-shadow-[0_0_5px_rgba(16,185,129,0.8)]' : 'text-pip/40 hover:text-pip/70'}`}
              >
                {sub}
              </button>
            ))}
          </div>
        );
      case 'MAP':
        return (
            <div className="flex gap-6 mb-4 text-xl overflow-x-auto scrollbar-hide opacity-50 cursor-default">
                <span className="text-pip font-bold drop-shadow-[0_0_5px_rgba(16,185,129,0.8)]">GEOLOCATION</span>
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
          {['STAT', 'DATA', 'MAP', 'RADIO'].map((tab) => (
            <div key={tab} className="relative group shrink-0">
              <button
                onClick={() => handleTabClick(tab as MainTab)}
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
            key={currentIndex}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
             {activeTab === 'STAT' && <StatScreen activeSubTab={activeSub as StatSubTab} />}
             {activeTab === 'DATA' && <DataScreen activeSubTab={activeSub as DataSubTab} />}
             {activeTab === 'MAP' && <MapScreen />}
             {activeTab === 'RADIO' && <RadioScreen />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FOOTER STATS */}
      <footer className="h-12 flex justify-between items-center px-2 sm:px-6 text-pip font-bold text-lg sm:text-xl border-t-2 border-pip/50 mx-0 sm:mx-4 bg-black relative z-10 shrink-0">
         <div className="flex items-center gap-2">
            <div className="bg-pip text-black px-1 text-sm">HP</div>
            <div className="w-16 sm:w-32 h-4 border border-pip p-0.5 relative">
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

         {/* AP - NAVIGATION INDICATOR */}
         <div className="flex items-center gap-2">
            <div className={`px-1 text-sm transition-colors ${apCharge > 0 ? 'bg-pip text-black' : 'text-pip border border-pip'}`}>AP</div>
            <div className="w-16 sm:w-32 h-4 border border-pip p-0.5 relative">
                <div 
                    className="h-full bg-pip transition-all duration-75 ease-out"
                    style={{ width: `${apCharge}%` }}
                ></div>
            </div>
            <span className="text-sm sm:text-base w-16 text-right">{Math.round(apCharge)}/100</span>
         </div>
      </footer>

    </div>
  );
};

export default PipBoy;