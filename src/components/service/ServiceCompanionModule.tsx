import React, { useState } from 'react';
import {
  ShieldCheck,
  Battery,
  Gauge,
  Truck,
  CheckCircle2,
  FileText,
  MapPin,
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { CLIENT_PROFILE, MOCK_SERVICE_RECORDS } from '../../data/mockData';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const ServiceCompanionModule: React.FC = () => {
  const [valetRequested, setValetRequested] = useState(false);
  const [valetStep, setValetStep] = useState<'idle' | 'booked' | 'enroute'>('idle');

  const handleRequestValet = () => {
    setValetRequested(true);
    setValetStep('booked');
    setTimeout(() => {
      setValetStep('enroute');
    }, 2500);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Module Header Banner */}
      <div className="bg-obsidian-800/95 rounded-3xl p-6 sm:p-8 border border-obsidian-500/80 shadow-soft">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-semibold text-frost-100">
                Service Companion
              </span>
              <Badge variant="emerald" size="sm" icon={<ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />}>
                Telemetry Nominal
              </Badge>
              <Badge variant="teal" size="sm">
                White-Glove Tier
              </Badge>
            </div>
            <p className="text-xs sm:text-sm text-frost-500 max-w-2xl leading-relaxed">
              Real-time vehicle telemetry, predictive component health monitoring, and on-demand valet collection for {CLIENT_PROFILE.primaryVehicle.model}.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="text-xs text-frost-600">Last synced 2 mins ago</span>
            <Button
              variant="teal"
              size="sm"
              icon={<RefreshCw className="w-3.5 h-3.5 text-teal-300" />}
              onClick={() => alert("Telematics data refreshed: All systems nominal.")}
            >
              Sync Telemetry
            </Button>
          </div>
        </div>
      </div>

      {/* Real-Time Telematics & Diagnostics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Battery Health */}
        <div className="bg-obsidian-800 p-5 rounded-3xl border border-obsidian-500/80 shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-frost-600 uppercase tracking-wider">
              Battery Health
            </span>
            <Battery className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-serif text-3xl font-bold text-frost-100">99%</span>
            <span className="text-xs font-medium text-emerald-300">State of Health (SOH)</span>
          </div>
          <div className="w-full bg-obsidian-700 h-2 rounded-full overflow-hidden mt-3">
            <div className="bg-emerald-500 h-full rounded-full" style={{ width: '99%' }} />
          </div>
          <div className="flex justify-between text-[11px] text-frost-600 mt-2">
            <span>Cell Temp: 23.4°C</span>
            <span>800V Architecture</span>
          </div>
        </div>

        {/* Tire Pressure Telematics */}
        <div className="bg-obsidian-800 p-5 rounded-3xl border border-obsidian-500/80 shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-frost-600 uppercase tracking-wider">
              Tire Pressure
            </span>
            <Gauge className="w-4 h-4 text-teal-400" />
          </div>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="font-serif text-3xl font-bold text-frost-100">36</span>
            <span className="text-xs font-medium text-frost-600">PSI Avg (Cold)</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5 text-[11px] text-frost-200 font-medium">
            <div className="p-1.5 rounded-lg bg-obsidian-700 border border-obsidian-500/50 text-center">FL: 36 PSI</div>
            <div className="p-1.5 rounded-lg bg-obsidian-700 border border-obsidian-500/50 text-center">FR: 36 PSI</div>
            <div className="p-1.5 rounded-lg bg-obsidian-700 border border-obsidian-500/50 text-center">RL: 38 PSI</div>
            <div className="p-1.5 rounded-lg bg-obsidian-700 border border-obsidian-500/50 text-center">RR: 38 PSI</div>
          </div>
        </div>

        {/* Brake Pad Life */}
        <div className="bg-obsidian-800 p-5 rounded-3xl border border-obsidian-500/80 shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-frost-600 uppercase tracking-wider">
              Carbon Ceramic Wear
            </span>
            <ShieldCheck className="w-4 h-4 text-amber-400" />
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-serif text-3xl font-bold text-frost-100">88%</span>
            <span className="text-xs font-medium text-amber-300">Brake Pad Life</span>
          </div>
          <div className="w-full bg-obsidian-700 h-2 rounded-full overflow-hidden mt-3">
            <div className="bg-amber-400 h-full rounded-full" style={{ width: '88%' }} />
          </div>
          <div className="flex justify-between text-[11px] text-frost-600 mt-2">
            <span>Fluid Boiling Pt: 278°C</span>
            <span>Est. 28,000 mi remaining</span>
          </div>
        </div>

        {/* Firmware & Software */}
        <div className="bg-obsidian-800 p-5 rounded-3xl border border-obsidian-500/80 shadow-soft">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-frost-600 uppercase tracking-wider">
              OS Firmware
            </span>
            <Sparkles className="w-4 h-4 text-azure-400" />
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-serif text-3xl font-bold text-frost-100">v4.2</span>
            <span className="text-xs font-medium text-emerald-300">Up to date</span>
          </div>
          <div className="mt-3 p-2.5 rounded-xl bg-obsidian-700/80 border border-obsidian-500/50 text-[11px] text-frost-400 leading-snug">
            OTA patch installed March 2026. Adaptive aero logic improved.
          </div>
        </div>
      </div>

      {/* Interactive Valet Scheduling Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 bg-obsidian-800 rounded-3xl p-6 sm:p-8 border border-obsidian-500/80 shadow-soft space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider font-semibold text-frost-600 block">
                White-Glove Valet Collection
              </span>
              <h3 className="font-serif text-2xl font-semibold text-frost-100">
                Schedule Atelier Service Dispatch
              </h3>
            </div>
            <Badge variant="obsidian" size="sm">
              Obsidian Privilege
            </Badge>
          </div>

          <p className="text-xs sm:text-sm text-frost-500 leading-relaxed">
            A uniformed RYDR transport team will pick up your Spectre GT from your designated location in an enclosed climate-controlled carrier and provide a preconditioned replacement loaner.
          </p>

          {valetRequested ? (
            <div className="p-5 rounded-2xl bg-emerald-900/35 border border-emerald-700/60 space-y-3">
              <div className="flex items-center gap-2 text-emerald-300 font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>
                  {valetStep === 'booked' ? 'Valet Dispatch Confirmed!' : 'Driver Marcus Vance En Route in Enclosed Hauler'}
                </span>
              </div>
              <p className="text-xs text-emerald-100">
                Scheduled for today at your Bel Air residence. Complimentary RYDR Lumina SUV loaner attached.
              </p>
              <div className="flex items-center gap-3 text-xs text-emerald-300 font-medium pt-1">
                <span>ETA: 45 minutes</span>
                <span>•</span>
                <span>Carrier Plate: CA-RYDR-99</span>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl bg-obsidian-900 border border-obsidian-500/70">
                  <span className="text-[10px] text-frost-600 uppercase font-semibold block mb-1">
                    Pickup Location
                  </span>
                  <div className="flex items-center gap-2 text-xs font-semibold text-frost-100">
                    <MapPin className="w-3.5 h-3.5 text-teal-400" />
                    <span>Bel Air Residence (Preset)</span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-obsidian-900 border border-obsidian-500/70">
                  <span className="text-[10px] text-frost-600 uppercase font-semibold block mb-1">
                    Loaner Vehicle
                  </span>
                  <div className="flex items-center gap-2 text-xs font-semibold text-frost-100">
                    <Truck className="w-3.5 h-3.5 text-teal-400" />
                    <span>RYDR Lumina Executive Loaner</span>
                  </div>
                </div>
              </div>

              <Button
                variant="primary"
                size="md"
                fullWidth
                icon={<Truck className="w-4 h-4 text-obsidian-950" />}
                onClick={handleRequestValet}
              >
                Request Enclosed Valet Pickup
              </Button>
            </div>
          )}
        </div>

        {/* Primary Vehicle Info Card */}
        <div className="lg:col-span-5 bg-obsidian-900 rounded-3xl p-6 border border-obsidian-500/80 shadow-soft flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-frost-600">
                Authorized Atelier
              </span>
              <span className="text-xs font-medium text-emerald-300">Accredited 2026</span>
            </div>
            <h4 className="font-serif text-xl font-semibold text-frost-100 mb-1">
              RYDR Atelier Beverly Hills
            </h4>
            <p className="text-xs text-frost-500 mb-4">
              9600 Wilshire Blvd, Beverly Hills, CA 90212 • Master Technician Assigned: Henrik Lindqvist
            </p>

            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-obsidian-500/80 mb-3">
              <img
                src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80"
                alt="Atelier Service Facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-frost-200 font-semibold pt-3 border-t border-obsidian-500/70">
            <span>Direct Line: (310) 555-RYDR</span>
            <span className="text-teal-400">Concierge Priority</span>
          </div>
        </div>
      </div>

      {/* Historical Maintenance Logbook */}
      <div className="bg-obsidian-800 rounded-3xl p-6 sm:p-8 border border-obsidian-500/80 shadow-soft">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-frost-100 tracking-tight">
              Atelier Service Ledger
            </h3>
            <p className="text-xs text-frost-500">
              Cryptographically signed maintenance records ensuring pristine vehicle provenance
            </p>
          </div>
          <Badge variant="obsidian" size="sm" icon={<FileText className="w-3.5 h-3.5 text-teal-400" />}>
            Verified Provenance
          </Badge>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-obsidian-500 text-left text-[11px] text-frost-600 uppercase tracking-wider">
                <th className="py-3 px-3">Service Code</th>
                <th className="py-3 px-3">Description</th>
                <th className="py-3 px-3">Date</th>
                <th className="py-3 px-3">Odometer</th>
                <th className="py-3 px-3">Facility</th>
                <th className="py-3 px-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-obsidian-500/50">
              {MOCK_SERVICE_RECORDS.map((rec) => (
                <tr key={rec.id} className="hover:bg-obsidian-700/50 transition-colors">
                  <td className="py-3 px-3 font-mono font-semibold text-teal-300">{rec.id}</td>
                  <td className="py-3 px-3 font-medium text-frost-100 max-w-xs">{rec.service}</td>
                  <td className="py-3 px-3 text-frost-500">{rec.date}</td>
                  <td className="py-3 px-3 text-frost-500">{rec.mileage}</td>
                  <td className="py-3 px-3 text-frost-500">{rec.atelier}</td>
                  <td className="py-3 px-3">
                    <Badge variant={rec.status === 'Completed' ? 'emerald' : 'teal'} size="sm">
                      {rec.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
