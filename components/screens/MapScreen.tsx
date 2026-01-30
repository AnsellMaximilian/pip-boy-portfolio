import React from 'react';
import { Globe, MapPin, Crosshair, Navigation, Locate } from 'lucide-react';

const LOCATION_HIERARCHY = [
    "Tangerang City",
    "Banten Province",
    "Republic of Indonesia",
    "Southeast Asia, Asia",
    "Earth (Third Planet, Sol System)",
    "Solar System",
    "Local Interstellar Cloud",
    "Orion Arm, Milky Way Galaxy",
    "Local Group",
    "Laniakea Supercluster",
    "Cosmic Web",
    "Observable Universe"
];

const MapScreen: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col md:flex-row gap-4 relative overflow-hidden">
        
        {/* Left Column: Visuals */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative p-4 border border-pip/20 bg-pip/5 rounded">
            
            {/* Coordinates Header */}
            <div className="absolute top-2 left-2 text-xs font-mono text-pip/70">
                <div>LAT: -6.178306</div>
                <div>LNG: 106.631889</div>
            </div>

            <div className="absolute top-2 right-2 text-xs font-mono text-pip/70 text-right">
                <div>SYS: SOL</div>
                <div>SEC: 7-G</div>
            </div>

            {/* Central Earth Visualization */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
                
                {/* Rotating Rings */}
                <div className="absolute inset-0 border border-pip/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-4 border border-dashed border-pip/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="absolute inset-0 border-l border-r border-pip/20 rounded-full animate-pulse"></div>

                {/* Crosshairs */}
                <Crosshair className="absolute text-pip/30 w-full h-full p-8" strokeWidth={0.5} />

                {/* Main Earth Icon */}
                <div className="relative z-10 bg-black rounded-full p-2 border border-pip shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                    <Globe size={80} className="text-pip animate-pulse-fast" strokeWidth={1.2} />
                </div>

                {/* Scanning Line */}
                <div className="absolute w-full h-0.5 bg-pip/50 top-1/2 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-50"></div>
            </div>

            {/* Status Text */}
            <div className="mt-8 flex items-center gap-2 text-pip font-bold tracking-widest uppercase">
                <Locate className="animate-pulse" size={16} />
                <span>Position Locked</span>
            </div>
        </div>

        {/* Right Column: Hierarchy List */}
        <div className="w-full md:w-1/2 flex flex-col h-full border-l-0 md:border-l-2 border-pip/30 pl-0 md:pl-4 overflow-y-auto">
            <div className="flex items-center gap-2 mb-4 border-b-2 border-pip pb-2">
                <Navigation size={20} />
                <h2 className="text-xl font-bold uppercase tracking-wider">Local Map Data</h2>
            </div>

            <div className="relative pl-4 space-y-4">
                {/* Vertical connecting line */}
                <div className="absolute left-[21px] top-2 bottom-4 w-0.5 bg-pip/30"></div>

                {LOCATION_HIERARCHY.map((loc, index) => (
                    <div 
                        key={index} 
                        className="relative flex items-center gap-4 group hover:bg-pip/10 p-1 rounded transition-colors cursor-default"
                        style={{ opacity: 1 - (index * 0.05) }} // Slight fade out for distant locations
                    >
                        {/* Dot/Icon on the line */}
                        <div className="relative z-10 bg-black p-1 border border-pip rounded-full">
                            {index === 4 ? ( // Earth Index
                                <Globe size={12} className="text-pip fill-pip/20" />
                            ) : (
                                <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-pip animate-pulse' : 'bg-pip/50'}`}></div>
                            )}
                        </div>

                        {/* Text */}
                        <div className="flex flex-col">
                            <span className={`font-mono uppercase ${index === 0 ? 'text-lg font-bold text-pip drop-shadow-[0_0_5px_rgba(16,185,129,0.8)]' : 'text-base text-pip/80'}`}>
                                {loc}
                            </span>
                            {index === 0 && (
                                <span className="text-xs text-pip/60 uppercase tracking-widest">[CURRENT LOCATION]</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default MapScreen;