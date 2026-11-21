import React, { useState } from 'react';
import {
  Menu,
  Search,
  MapPin,
  Bell,
  Sparkles,
  Crown,
} from 'lucide-react';
import type { NavModule } from '../../types';
import { CLIENT_PROFILE } from '../../data/mockData';
import { Button } from '../ui/Button';

interface TopNavProps {
  activeModule: NavModule;
  onOpenMobileMenu: () => void;
  onSelectModule: (module: NavModule) => void;
  onQuickSearch?: (query: string) => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  activeModule,
  onOpenMobileMenu,
  onSelectModule,
  onQuickSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const selectedAtelier = 'Bengaluru Indiranagar Hub';

  const moduleTitles: Record<NavModule, { title: string; subtitle: string }> = {
    overview: {
      title: 'Dashboard',
      subtitle: 'Live car health, service booking status, and owner updates',
    },
    copilot: {
      title: 'AI Car Assistant',
      subtitle: 'Compare variants, calculate EMI, and book home test drives',
    },
    service: {
      title: 'Service & Care',
      subtitle: 'Smart service reminders & live car health check',
    },
    showroom: {
      title: '360° Showroom',
      subtitle: '360° car view, interior themes & cabin sound demo',
    },
    loyalty: {
      title: 'My Benefits',
      subtitle: 'Owner rewards, digital service book & community drives',
    },
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSelectModule('copilot');
      if (onQuickSearch) {
        onQuickSearch(searchQuery);
      }
    }
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-obsidian-900/85 backdrop-blur-md border-b border-obsidian-500/70 px-4 sm:px-8 py-3.5 transition-all">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Mobile Toggle & Page Title */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onOpenMobileMenu}
            className="p-2 rounded-xl text-frost-500 hover:text-frost-100 hover:bg-obsidian-700 lg:hidden cursor-pointer"
            aria-label="Toggle navigation"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-serif text-lg sm:text-xl font-semibold text-frost-100 tracking-tight">
                {moduleTitles[activeModule].title}
              </h1>
              {activeModule === 'copilot' && (
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium bg-teal-900/70 text-teal-200 px-2.5 py-0.5 rounded-full border border-teal-700/60">
                  <Sparkles className="w-3 h-3 text-teal-400" />
                  AI Car Assistant
                </span>
              )}
            </div>
            <p className="text-xs text-frost-600 hidden md:block">
              {moduleTitles[activeModule].subtitle}
            </p>
          </div>
        </div>

        {/* Middle: Quick Search (Desktop) */}
        <div className="hidden xl:flex items-center flex-1 max-w-md mx-6">
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-frost-700" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ask AI Assistant (e.g. 'Compare Spectre EV vs Lumina SUV')..."
              className="w-full bg-obsidian-800 hover:bg-obsidian-700 focus:bg-obsidian-700 text-xs text-frost-100 placeholder-frost-700 pl-10 pr-16 py-2.5 rounded-full border border-obsidian-500 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-semibold text-frost-600 bg-obsidian-900 border border-obsidian-500 px-1.5 py-0.5 rounded shadow-xs">
              ⏎
            </span>
          </form>
        </div>

        {/* Right: Hub Location, Notifications & Profile */}
        <div className="flex items-center gap-2.5 sm:gap-4">
          {/* Hub Location Pill */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-obsidian-800 border border-obsidian-500 text-xs text-frost-400 font-medium">
            <MapPin className="w-3.5 h-3.5 text-teal-400" />
            <span>{selectedAtelier}</span>
          </div>

          {/* Quick AI Launch Button (if not on copilot) */}
          {activeModule !== 'copilot' && (
            <Button
              variant="teal"
              size="sm"
              icon={<Sparkles className="w-3.5 h-3.5 text-teal-300" />}
              onClick={() => onSelectModule('copilot')}
              className="hidden sm:inline-flex"
            >
              Ask AI Assistant
            </Button>
          )}

          {/* Notifications Bell */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 rounded-full text-frost-500 hover:text-frost-100 hover:bg-obsidian-700 transition-colors cursor-pointer"
              aria-label="View notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-500" />
            </button>

            {/* Notification Drawer Popover */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-obsidian-800 rounded-2xl shadow-soft-lg border border-obsidian-500 p-4 z-50">
                <div className="flex items-center justify-between pb-3 border-b border-obsidian-500/70">
                  <h4 className="text-xs font-semibold text-frost-100 uppercase tracking-wider">
                    Updates & Reminders
                  </h4>
                  <span className="text-[10px] text-teal-300 font-medium">2 New</span>
                </div>
                <div className="space-y-3 py-3">
                  <div className="p-2.5 rounded-xl bg-obsidian-900 border border-obsidian-500/70 text-xs">
                    <p className="font-semibold text-frost-100">Weekend Owners Drive: Coorg</p>
                    <p className="text-frost-500 text-[11px] mt-0.5">
                      Highway convoy drive & resort stay registrations are now open for Gold members.
                    </p>
                    <span className="text-[10px] text-frost-700 mt-1 block">2 hours ago</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-obsidian-900 border border-obsidian-500/70 text-xs">
                    <p className="font-semibold text-frost-100">Free Fast-Charging Credits</p>
                    <p className="text-frost-500 text-[11px] mt-0.5">
                      500 kWh complimentary highway charging credits added to your account for this quarter.
                    </p>
                    <span className="text-[10px] text-frost-700 mt-1 block">Yesterday</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowNotifications(false)}
                  className="w-full text-center text-xs font-medium text-teal-400 hover:text-teal-300 pt-2 border-t border-obsidian-500/70 cursor-pointer"
                >
                  Dismiss
                </button>
              </div>
            )}
          </div>

          {/* Client Profile Pill */}
          <div
            onClick={() => onSelectModule('loyalty')}
            className="flex items-center gap-2.5 pl-2 pr-3 py-1 rounded-full bg-obsidian-800 hover:bg-obsidian-700 border border-obsidian-500 cursor-pointer transition-colors shadow-soft"
          >
            <div className="relative">
              <div className="w-7 h-7 rounded-full bg-teal-500 text-obsidian-950 flex items-center justify-center font-serif text-xs font-bold">
                RV
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-amber-900 border border-amber-500/60 flex items-center justify-center">
                <Crown className="w-2 h-2 text-amber-300" />
              </span>
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-xs font-semibold text-frost-100 leading-tight">
                {CLIENT_PROFILE.name}
              </p>
              <p className="text-[10px] font-medium text-amber-300 tracking-wide uppercase">
                {CLIENT_PROFILE.tier}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
