import React from 'react';
import { Compass, Sparkles, ShieldCheck, Layers, Crown } from 'lucide-react';
import type { NavModule } from '../../types';

interface MobileNavProps {
  activeModule: NavModule;
  onSelectModule: (module: NavModule) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  activeModule,
  onSelectModule,
}) => {
  const items = [
    { id: 'overview' as NavModule, label: 'Dashboard', icon: Compass },
    { id: 'copilot' as NavModule, label: 'AI Assistant', icon: Sparkles },
    { id: 'service' as NavModule, label: 'Service', icon: ShieldCheck },
    { id: 'showroom' as NavModule, label: 'Showroom', icon: Layers },
    { id: 'loyalty' as NavModule, label: 'Benefits', icon: Crown },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-obsidian-900/95 backdrop-blur-lg border-t border-obsidian-500/80 px-2 py-2 safe-area-pb">
      <div className="flex items-center justify-around">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeModule === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectModule(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all cursor-pointer ${
                isActive
                  ? 'text-teal-300 font-semibold'
                  : 'text-frost-600 hover:text-frost-200'
              }`}
            >
              <div
                className={`p-1.5 rounded-lg transition-colors ${
                  isActive ? 'bg-teal-900/70 text-teal-300 border border-teal-500/40' : 'text-frost-600'
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] mt-0.5 tracking-tight font-medium">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
