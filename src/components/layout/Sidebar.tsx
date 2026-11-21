import React from 'react';
import {
  Compass,
  Sparkles,
  ShieldCheck,
  Layers,
  Crown,
  ChevronRight,
  Zap,
  PhoneCall,
  X
} from 'lucide-react';
import type { NavModule } from '../../types';
import { CLIENT_PROFILE } from '../../data/mockData';
import { Badge } from '../ui/Badge';

interface SidebarProps {
  activeModule: NavModule;
  onSelectModule: (module: NavModule) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeModule,
  onSelectModule,
  isOpenMobile,
  onCloseMobile,
}) => {
  const navItems = [
    {
      id: 'overview' as NavModule,
      label: 'Dashboard',
      subtitle: 'My Car & Live Status',
      icon: Compass,
    },
    {
      id: 'copilot' as NavModule,
      label: 'AI Car Assistant',
      subtitle: 'Compare & Buy',
      icon: Sparkles,
      badge: 'Smart AI',
      badgeVariant: 'teal' as const,
    },
    {
      id: 'service' as NavModule,
      label: 'Service & Care',
      subtitle: 'Health & Booking',
      icon: ShieldCheck,
      badge: 'All OK',
      badgeVariant: 'emerald' as const,
    },
    {
      id: 'showroom' as NavModule,
      label: '360° Showroom',
      subtitle: 'Build & Price',
      icon: Layers,
    },
    {
      id: 'loyalty' as NavModule,
      label: 'My Benefits',
      subtitle: 'Rewards & Warranty',
      icon: Crown,
      badge: 'Gold',
      badgeVariant: 'amber' as const,
    },
  ];

  const handleNavClick = (moduleId: NavModule) => {
    onSelectModule(moduleId);
    onCloseMobile();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          className="fixed inset-0 bg-obsidian-950/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-40 h-screen w-72 sm:w-80 bg-obsidian-900/95 backdrop-blur-md border-r border-obsidian-500/70 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Brand Header */}
        <div className="p-6 border-b border-obsidian-500/60">
          <div className="flex items-center justify-between">
            <div
              onClick={() => handleNavClick('overview')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              {/* Crest Symbol */}
              <div className="w-10 h-10 rounded-xl bg-obsidian-800 border border-teal-500/40 flex items-center justify-center shadow-soft group-hover:border-teal-400 group-hover:shadow-glow-teal transition-all">
                <span className="font-serif font-bold text-xl text-teal-400 tracking-tighter">R</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-2xl font-semibold tracking-wider text-frost-100">
                    RYDR
                  </span>
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-teal-300 px-1.5 py-0.5 rounded bg-teal-900/80 border border-teal-700/50">
                    Connect
                  </span>
                </div>
                <p className="text-[11px] font-medium tracking-wide text-frost-600 italic">
                  More than just a ride.
                </p>
              </div>
            </div>

            {/* Mobile close button */}
            <button
              onClick={onCloseMobile}
              className="p-1.5 rounded-lg text-frost-600 hover:text-frost-100 hover:bg-obsidian-700 lg:hidden cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation List */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1.5">
          <div className="px-3 pb-2">
            <p className="text-[11px] uppercase tracking-wider font-semibold text-frost-700">
              Customer Hub
            </p>
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeModule === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl transition-all duration-200 text-left cursor-pointer group ${
                  isActive
                    ? 'bg-teal-900/55 text-frost-100 font-medium shadow-soft border border-teal-500/45'
                    : 'text-frost-500 hover:bg-obsidian-800 hover:text-frost-100 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-teal-500 text-obsidian-950 shadow-glow-teal'
                        : 'bg-obsidian-800 text-frost-600 group-hover:text-teal-300 group-hover:bg-obsidian-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className={`text-sm tracking-tight truncate ${isActive ? 'font-semibold text-frost-100' : 'font-medium'}`}>
                      {item.label}
                    </p>
                    <p className="text-[11px] text-frost-700 truncate">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 ml-2">
                  {item.badge && (
                    <Badge variant={item.badgeVariant} size="sm">
                      {item.badge}
                    </Badge>
                  )}
                  {isActive && <ChevronRight className="w-4 h-4 text-teal-400" />}
                </div>
              </button>
            );
          })}

          {/* Active Vehicle Telematics Snapshot */}
          <div className="pt-6 px-1">
            <div className="p-4 rounded-2xl bg-obsidian-800 border border-obsidian-500/80 shadow-soft">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-frost-700">
                  Active Vehicle
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-300 font-medium bg-emerald-900/50 px-2 py-0.5 rounded-full border border-emerald-700/50">
                  <Zap className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                  {CLIENT_PROFILE.primaryVehicle.batteryLevel}% Charge
                </span>
              </div>

              <div className="relative rounded-xl overflow-hidden h-24 mb-3 border border-obsidian-500/80">
                <img
                  src={CLIENT_PROFILE.primaryVehicle.image}
                  alt={CLIENT_PROFILE.primaryVehicle.model}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/85 via-transparent to-transparent flex items-end p-2.5">
                  <p className="text-xs font-semibold text-frost-100 tracking-wide truncate">
                    {CLIENT_PROFILE.primaryVehicle.model}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-frost-600 border-t border-obsidian-500/60 pt-2.5">
                <span>Range: <strong className="text-frost-100 font-semibold">{CLIENT_PROFILE.primaryVehicle.rangeRemaining} km</strong></span>
                <button
                  onClick={() => handleNavClick('service')}
                  className="text-teal-400 hover:text-teal-300 font-medium hover:underline text-[11px] cursor-pointer"
                >
                  Health Check →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Assigned Concierge Footer */}
        <div className="p-4 border-t border-obsidian-500/60 bg-obsidian-950/60">
          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-obsidian-800 border border-obsidian-500/80 shadow-soft">
            <div className="relative">
              <img
                src={CLIENT_PROFILE.assignedConcierge.avatar}
                alt={CLIENT_PROFILE.assignedConcierge.name}
                className="w-10 h-10 rounded-full object-cover border border-teal-500/60"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-obsidian-800" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-frost-100 truncate">
                  {CLIENT_PROFILE.assignedConcierge.name}
                </p>
                <span className="text-[10px] font-medium text-emerald-300 bg-emerald-900/50 px-1.5 py-0.2 rounded border border-emerald-700/40">
                  Online
                </span>
              </div>
              <p className="text-[10px] text-frost-600 truncate">
                {CLIENT_PROFILE.assignedConcierge.title}
              </p>
            </div>
            <button
              onClick={() => handleNavClick('copilot')}
              className="p-1.5 rounded-lg bg-teal-900/70 text-teal-300 hover:bg-teal-500 hover:text-obsidian-950 border border-teal-700/50 transition-colors cursor-pointer"
              title="Chat with Service Advisor"
            >
              <PhoneCall className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
