import React, { useState } from 'react';
import {
  Rotate3d,
  Sparkles,
  Volume2,
  Palette,
  ArrowRight
} from 'lucide-react';
import { LUXURY_VEHICLES } from '../../data/mockData';
import type { Vehicle } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface ShowroomModuleProps {
  onConsultCoPilot: (vehicle: Vehicle) => void;
}

export const ShowroomModule: React.FC<ShowroomModuleProps> = ({
  onConsultCoPilot,
}) => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(LUXURY_VEHICLES[0]);
  const [activeView, setActiveView] = useState<'exterior' | 'interior'>('exterior');
  const [selectedColor, setSelectedColor] = useState('Nordic Teal Metallic');
  const [selectedLeather, setSelectedLeather] = useState('Scandinavian Saddle Tan');
  const [soundMode, setSoundMode] = useState<'quiet' | 'whir' | 'v8'>('quiet');
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  const paintColors = [
    { name: 'Nordic Teal Metallic', hex: '#004d45', tag: 'Bespoke Signature' },
    { name: 'Alabaster Frost', hex: '#f5f7fa', tag: 'Classic' },
    { name: 'Obsidian Stealth Gloss', hex: '#0b0c10', tag: 'Atelier Exclusive' },
    { name: 'St. Moritz Steel Blue', hex: '#495b7d', tag: 'Technical' },
    { name: 'Midnight Violet Satin', hex: '#6943e2', tag: 'Limited Edition' },
  ];

  const interiorLeathers = [
    { name: 'Scandinavian Saddle Tan', hex: '#92400e' },
    { name: 'Midnight Slate Nappa', hex: '#1e2230' },
    { name: 'Arctic Chalk Nappa', hex: '#dadce1' },
    { name: 'Obsidian Carbon Stealth', hex: '#19191e' },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Studio Header */}
      <div className="bg-obsidian-800/95 rounded-3xl p-6 sm:p-8 border border-obsidian-500/80 shadow-soft">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-semibold text-frost-100">
                Showroom Atelier
              </span>
              <Badge variant="violet" size="sm" icon={<Rotate3d className="w-3.5 h-3.5 text-violet-300" />}>
                360° Studio Spec
              </Badge>
              <Badge variant="obsidian" size="sm">
                Private Viewing Room
              </Badge>
            </div>
            <p className="text-xs sm:text-sm text-frost-500 max-w-2xl leading-relaxed">
              Immerse yourself in the bespoke atelier. Audition bespoke acoustic signatures, configure full-grain organic leathers, and explore transcontinental vehicle dynamics.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <Button
              variant="primary"
              size="sm"
              icon={<Sparkles className="w-3.5 h-3.5 text-obsidian-950" />}
              onClick={() => onConsultCoPilot(selectedVehicle)}
            >
              Analyze in Co-Pilot
            </Button>
          </div>
        </div>
      </div>

      {/* Flagship Vehicle Selector Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {LUXURY_VEHICLES.map((v) => {
          const isSelected = selectedVehicle.id === v.id;
          return (
            <button
              key={v.id}
              onClick={() => setSelectedVehicle(v)}
              className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-teal-900/55 text-frost-100 border-teal-400 shadow-glow-teal'
                  : 'bg-obsidian-800 text-frost-500 border-obsidian-500/80 hover:bg-obsidian-700 hover:text-frost-200'
              }`}
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-frost-600 block">
                  {v.category}
                </span>
                <p className={`font-serif text-base font-semibold ${isSelected ? 'text-frost-100' : 'text-frost-300'}`}>
                  {v.name}
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs font-medium">
                <span className="text-teal-300 font-semibold">${v.startingPrice.toLocaleString()}</span>
                <span className="text-[10px] text-frost-600">{v.propulsion}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Virtual Studio Display */}
      <div className="bg-obsidian-800 rounded-3xl border border-obsidian-500/80 shadow-soft-lg overflow-hidden">
        {/* Visual Viewport */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-obsidian-950 overflow-hidden">
          <img
            src={activeView === 'exterior' ? selectedVehicle.exteriorImage : selectedVehicle.interiorImage}
            alt={selectedVehicle.name}
            className="w-full h-full object-cover transition-all duration-700"
          />

          {/* View Toggle (Exterior vs Interior) */}
          <div className="absolute top-4 left-4 z-10 flex items-center p-1 bg-obsidian-900/85 backdrop-blur-md rounded-2xl border border-obsidian-500 shadow-soft">
            <button
              onClick={() => setActiveView('exterior')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeView === 'exterior'
                  ? 'bg-teal-500 text-obsidian-950 shadow-xs'
                  : 'text-frost-400 hover:text-frost-100'
              }`}
            >
              Exterior Studio
            </button>
            <button
              onClick={() => setActiveView('interior')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeView === 'interior'
                  ? 'bg-teal-500 text-obsidian-950 shadow-xs'
                  : 'text-frost-400 hover:text-frost-100'
              }`}
            >
              Interior Sanctuary
            </button>
          </div>

          {/* Color & Specification Floating Badge */}
          <div className="absolute bottom-4 left-4 z-10 bg-obsidian-950/85 backdrop-blur-md text-frost-100 p-4 rounded-2xl border border-teal-500/35 max-w-sm">
            <span className="text-[10px] uppercase tracking-widest font-semibold text-teal-300 block">
              Atelier Preview Spec
            </span>
            <h4 className="font-serif text-lg font-semibold">{selectedVehicle.name}</h4>
            <p className="text-xs text-frost-400 mt-0.5">
              Finish: <strong className="text-frost-100">{selectedColor}</strong> • Trim: <strong className="text-frost-100">{selectedLeather}</strong>
            </p>
          </div>

          {/* 360 Rotation Simulated Icon */}
          <div className="absolute top-4 right-4 z-10 bg-obsidian-900/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-obsidian-500 shadow-soft text-xs text-frost-100 font-semibold flex items-center gap-1.5">
            <Rotate3d className="w-4 h-4 text-teal-400 animate-spin [animation-duration:8s]" />
            <span>Interactive 360° Studio</span>
          </div>
        </div>

        {/* Customization Atelier Controls */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Exterior & Interior Swatches */}
            <div className="lg:col-span-7 space-y-6">
              {/* Exterior Colors */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-frost-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5 text-teal-400" />
                    Exterior Finish: <strong className="text-teal-300 ml-1">{selectedColor}</strong>
                  </span>
                  <span className="text-[11px] text-frost-600">Hand-polished 7-layer coat</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {paintColors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`flex items-center gap-2 p-2 pr-3 rounded-xl border transition-all cursor-pointer ${
                        selectedColor === color.name
                          ? 'border-teal-400 bg-teal-900/40 ring-2 ring-teal-500/25'
                          : 'border-obsidian-500 bg-obsidian-900/60 hover:bg-obsidian-700'
                      }`}
                    >
                      <span
                        className="w-5 h-5 rounded-full border border-frost-100/25 shadow-xs"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-xs font-medium text-frost-100">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Interior Leathers */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-frost-200 uppercase tracking-wider">
                    Interior Aniline Leather: <strong className="text-teal-300 ml-1">{selectedLeather}</strong>
                  </span>
                  <span className="text-[11px] text-frost-600">Scandinavian organic chestnut hide</span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {interiorLeathers.map((leather) => (
                    <button
                      key={leather.name}
                      onClick={() => setSelectedLeather(leather.name)}
                      className={`flex items-center gap-2 p-2 pr-3 rounded-xl border transition-all cursor-pointer ${
                        selectedLeather === leather.name
                          ? 'border-teal-400 bg-teal-900/40 ring-2 ring-teal-500/25'
                          : 'border-obsidian-500 bg-obsidian-900/60 hover:bg-obsidian-700'
                      }`}
                    >
                      <span
                        className="w-5 h-5 rounded-full border border-frost-100/25 shadow-xs"
                        style={{ backgroundColor: leather.hex }}
                      />
                      <span className="text-xs font-medium text-frost-100">{leather.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Acoustic Soundstage Preview Simulator */}
            <div className="lg:col-span-5 bg-obsidian-900 rounded-3xl p-5 border border-obsidian-500/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-frost-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5 text-teal-400" />
                    Acoustic Soundstage
                  </span>
                  <Badge variant="obsidian" size="sm">
                    B&O 3D Spatial
                  </Badge>
                </div>
                <p className="text-xs text-frost-500 mb-4">
                  Experience cabin acoustic isolation or active synthesized powertrain frequencies.
                </p>

                {/* Sound Modes */}
                <div className="space-y-2">
                  {[
                    { id: 'quiet', title: 'Acoustic Sanctuary (54 dB)', desc: 'Zero exterior frequencies, active noise cancelling glass.' },
                    { id: 'whir', title: 'Torque Surge Frequency', desc: 'Synthesized harmonic whine tuned for spirited acceleration.' },
                    { id: 'v8', title: 'Hybrid V8 Symphony', desc: 'Dual-active valve baritone with deep exhaust overrun.' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setSoundMode(s.id as any);
                        setIsPlayingSound(true);
                      }}
                      className={`w-full p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        soundMode === s.id
                          ? 'bg-obsidian-800 border-teal-500/70 shadow-xs text-frost-100'
                          : 'bg-obsidian-800/50 border-obsidian-500/60 text-frost-400 hover:bg-obsidian-800'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-frost-100">{s.title}</span>
                        {soundMode === s.id && (
                          <span className="flex items-center gap-0.5">
                            <span className="w-1 h-3 bg-teal-400 rounded animate-pulse" />
                            <span className="w-1 h-5 bg-teal-400 rounded animate-pulse [animation-delay:0.2s]" />
                            <span className="w-1 h-2 bg-teal-400 rounded animate-pulse [animation-delay:0.4s]" />
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-frost-600 mt-0.5">{s.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-obsidian-500/70 mt-4 flex items-center justify-between">
                <span className="text-xs text-frost-200 font-semibold">Soundstage: Active</span>
                <button
                  onClick={() => setIsPlayingSound(!isPlayingSound)}
                  className="text-xs text-teal-400 hover:text-teal-300 font-semibold hover:underline cursor-pointer"
                >
                  {isPlayingSound ? 'Mute Preview' : 'Audition Profile'}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Action */}
          <div className="pt-4 border-t border-obsidian-500/70 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-frost-500">
                Ready to configure this exact specification?
              </span>
              <p className="text-sm font-semibold text-frost-100">
                Estimated Delivery: 4-6 Weeks to Beverly Hills Atelier
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="teal"
                size="md"
                onClick={() => alert(`Private showroom appointment request forwarded to Clara Beauchamp for ${selectedVehicle.name}.`)}
              >
                Schedule Private Viewing
              </Button>
              <Button
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4 text-obsidian-950" />}
                iconPosition="right"
                onClick={() => onConsultCoPilot(selectedVehicle)}
              >
                Open in AI Co-Pilot
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
