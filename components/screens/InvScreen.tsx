import React, { useState } from 'react';
import { InvSubTab, InventoryItem } from '../../types';
import { ITEMS } from '../../data';
import { Package, Smartphone, Terminal, Briefcase } from 'lucide-react';

interface InvScreenProps {
  activeSubTab: InvSubTab;
}

const InvScreen: React.FC<InvScreenProps> = ({ activeSubTab }) => {
    // For this demo, we just show all items regardless of subtab, 
    // or we could filter. Let's just show items as "Weapons" for fun (Projects are your weapons).
    return <ItemsView />;
};

const ItemsView: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<InventoryItem>(ITEMS[0]);

  return (
    <div className="flex flex-col md:flex-row h-full gap-4">
      {/* Item List */}
      <div className="w-full md:w-1/2 flex flex-col border-r-2 border-pip/30 pr-2">
         <div className="flex justify-between px-2 mb-2 border-b border-pip/30 text-sm opacity-70">
            <span>ITEM</span>
            <div className="flex gap-4">
                <span>DMG</span>
                <span>VAL</span>
            </div>
         </div>
        {ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className={`flex justify-between items-center p-2 font-mono uppercase text-lg transition-colors ${
              selectedItem.id === item.id ? 'bg-pip text-black' : 'text-pip hover:bg-pip/20'
            }`}
          >
            <span className="truncate pr-4">{item.name}</span>
            <div className="flex gap-4 flex-shrink-0">
                <span className="w-8 text-right">{item.damage}</span>
                <span className="w-8 text-right">{item.value}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Item Details */}
      <div className="w-full md:w-1/2 flex flex-col p-4 text-pip items-center">
          <div className="w-48 h-48 border-2 border-dashed border-pip/50 rounded flex items-center justify-center mb-6 bg-pip/5">
                <Terminal size={80} className="animate-pulse" />
          </div>
          
          <div className="w-full border-2 border-pip p-4 relative">
             <h3 className="absolute -top-3 left-4 bg-black px-2 text-xl font-bold">{selectedItem.name}</h3>
             <div className="mt-2 space-y-2">
                <div className="flex justify-between border-b border-pip/30 pb-1">
                    <span>DAMAGE (Impact)</span>
                    <span>{selectedItem.damage}</span>
                </div>
                 <div className="flex justify-between border-b border-pip/30 pb-1">
                    <span>WEIGHT (Size)</span>
                    <span>{selectedItem.weight}</span>
                </div>
                 <div className="flex justify-between border-b border-pip/30 pb-1">
                    <span>VALUE (LOC)</span>
                    <span>{selectedItem.value}</span>
                </div>
             </div>
             
             <div className="mt-4 text-lg leading-snug">
                {selectedItem.description}
             </div>

             <div className="mt-4 flex flex-wrap gap-2">
                {selectedItem.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-pip/20 text-xs border border-pip rounded">
                        {tag}
                    </span>
                ))}
             </div>
          </div>
      </div>
    </div>
  );
};

export default InvScreen;