import React, { useState, useEffect } from 'react';
import BootSequence from './components/BootSequence';
import PipBoy from './components/PipBoy';
import CRTOverlay from './components/CRTOverlay';

const App: React.FC = () => {
  const [booted, setBooted] = useState(false);
  const [showPipBoy, setShowPipBoy] = useState(false);

  const handleBootComplete = () => {
    setBooted(true);
    // Slight delay before showing UI to allow for a "screen clear" feel
    setTimeout(() => {
        setShowPipBoy(true);
    }, 200);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden font-mono selection:bg-pip selection:text-black">
      <CRTOverlay />
      
      {!booted ? (
        <BootSequence onComplete={handleBootComplete} />
      ) : (
        <div className={`transition-opacity duration-1000 ${showPipBoy ? 'opacity-100' : 'opacity-0'}`}>
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')] opacity-10 pointer-events-none"></div>
           <PipBoy />
        </div>
      )}
    </div>
  );
};

export default App;