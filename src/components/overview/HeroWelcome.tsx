import React from 'react';
import { Sparkles, Calendar, BatteryCharging, Shield, ArrowRight, Gauge } from 'lucide-react';
import { CLIENT_PROFILE } from '../../data/mockData';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import type { NavModule } from '../../types';

interface HeroWelcomeProps {
  onNavigate: (module: NavModule) => void;
}

export const HeroWelcome: React.FC<HeroWelcomeProps> = ({
  onNavigate,
}) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-obsidian-800 via-obsidian-900 to-teal-950 border border-obsidian-500/80 shadow-soft-lg p-6 sm:p-10 mb-8">
      {/* Subtle background ambient blur circles */}
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-teal-500/15 blur-3xl pointer-events-none" />
      <div className="absolute right-40 -bottom-20 w-96 h-96 rounded-full bg-violet-500/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Greeting & Telematics Digest */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="obsidian" size="sm">
              Obsidian Client Portal
            </Badge>
            <Badge variant="emerald" size="sm" icon={<Shield className="w-3 h-3 text-emerald-300" />}>
              Valet Telematics Active
            </Badge>
            <span className="text-xs text-frost-600">
              Member since 2024
            </span>
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-frost-100 tracking-tight text-balance">
              Good afternoon, <span className="italic text-teal-300">{CLIENT_PROFILE.name}</span>.
            </h2>
            <p className="text-sm sm:text-base text-frost-400 max-w-xl leading-relaxed">
              Your <strong className="text-frost-100 font-semibold">{CLIENT_PROFILE.primaryVehicle.model}</strong> is preconditioned and awaiting your next transcontinental journey. All onboard telemetry is within optimal tolerances.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-obsidian-900/80 border border-obsidian-500/80 shadow-xs">
              <div className="flex items-center gap-1.5 text-xs text-frost-600 mb-1">
                <BatteryCharging className="w-3.5 h-3.5 text-emerald-400" />
                <span>Battery Level</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-2xl font-bold text-frost-100">
                  {CLIENT_PROFILE.primaryVehicle.batteryLevel}%
                </span>
                <span className="text-[11px] font-medium text-emerald-300">
                  318 mi range
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-obsidian-900/80 border border-obsidian-500/80 shadow-xs">
              <div className="flex items-center gap-1.5 text-xs text-frost-600 mb-1">
                <Gauge className="w-3.5 h-3.5 text-teal-400" />
                <span>Diagnostics</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-2xl font-bold text-frost-100">
                  Optimal
                </span>
                <span className="text-[11px] font-medium text-frost-600">
                  36 PSI all
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-obsidian-900/80 border border-obsidian-500/80 shadow-xs col-span-2 sm:col-span-1">
              <div className="flex items-center gap-1.5 text-xs text-frost-600 mb-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Next Service</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-2xl font-bold text-frost-100">
                  Apr 28
                </span>
                <span className="text-[11px] font-medium text-amber-300">
                  Atelier Valet
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              variant="primary"
              size="md"
              icon={<Sparkles className="w-4 h-4 text-obsidian-950" />}
              onClick={() => onNavigate('copilot')}
            >
              Consult AI Co-Pilot
            </Button>
            <Button
              variant="teal"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              onClick={() => onNavigate('showroom')}
            >
              Explore Showroom
            </Button>
          </div>
        </div>

        {/* Right Column: Hero Vehicle Visual */}
        <div className="lg:col-span-5">
          <div className="relative group rounded-3xl overflow-hidden shadow-soft-lg border border-obsidian-500/80 aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11]">
            <img
              src={CLIENT_PROFILE.primaryVehicle.image}
              alt={CLIENT_PROFILE.primaryVehicle.model}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-obsidian-950/30 to-transparent flex flex-col justify-end p-5 sm:p-6 text-frost-100">
              <span className="text-[10px] uppercase tracking-widest font-semibold text-teal-300">
                Registered In Garage
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight">
                {CLIENT_PROFILE.primaryVehicle.model}
              </h3>
              <div className="flex items-center justify-between text-xs text-frost-300 mt-1">
                <span>VIN: {CLIENT_PROFILE.primaryVehicle.vin}</span>
                <button
                  onClick={() => onNavigate('service')}
                  className="text-teal-300 hover:text-teal-200 font-medium underline text-[11px] cursor-pointer"
                >
                  View Telematics Log
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
