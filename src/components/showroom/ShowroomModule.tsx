import React, { useState } from 'react';
import {
  Rotate3d,
  Sparkles,
  Volume2,
  Palette,
  ArrowRight
} from 'lucide-react';
import { LUXURY_VEHICLES } from '../../data/mockData';
import { formatINR } from '../../types';
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
  const [selectedColor, setSelectedColor] = useState('Teal Blue');
  const [selectedLeather, setSelectedLeather] = useState('Leatherette Seats: Tan Brown');
  const [soundMode, setSoundMode] = useState<'quiet' | 'whir' | 'v8'>('quiet');
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  const paintColors = [
    { name: 'Teal Blue', hex: '#004d45', tag: 'Signature' },
    { name: 'Pearl White', hex: '#f5f7fa', tag: 'Classic' },
    { name: 'Jet Black', hex: '#0b0c10', tag: 'Popular' },
    { name: 'Steel Blue', hex: '#495b7d', tag: 'Metallic' },
    { name: 'Dark Purple Matte', hex: '#6943e2', tag: 'Limited Edition' },
  ];

  const interiorLeathers = [
    { name: 'Leatherette Seats: Tan Brown', hex: '#92400e' },
    { name: 'Charcoal Black', hex: '#1e2230' },
    { name: 'Off-White Dual-Tone', hex: '#dadce1' },
    { name: 'All-Black Sport', hex: '#19191e' },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Studio Header */}
      <div className="bg-obsidian-800/95 rounded-3xl p-6 sm:p-8 border border-obsidian-500/80 shadow-soft">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-semibold text-frost-100">
                360° Showroom
              </span>
              <Badge variant="violet" size="sm" icon={<Rotate3d className="w-3.5 h-3.5 text-violet-300" />}>
                360° Car View
              </Badge>
              <Badge variant="obsidian" size="sm">
                Build & Price
              </Badge>
            </div>
            <p className="text-xs sm:text-sm text-frost-500 max-w-2xl leading-relaxed">
              Explore colours, interiors, and variants in 360° before booking your test drive. Price range: ₹16.5L – ₹28.5L (Ex-showroom).
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <Button
              variant="primary"
              size="sm"
              icon={<Sparkles className="w-3.5 h-3.5 text-obsidian-950" />}
              onClick={() => onConsultCoPilot(selectedVehicle)}
            >
              Analyze in AI Assistant
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
                <span className="text-teal-300 font-semibold">{formatINR(v.startingPrice)}</span>
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
              Exterior View
            </button>
            <button
              onClick={() => setActiveView('interior')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                activeView === 'interior'
                  ? 'bg-teal-500 text-obsidian-950 shadow-xs'
                  : 'text-frost-400 hover:text-frost-100'
              }`}
            >
              Interior View
            </button>
          </div>

          {/* Color & Specification Floating Badge */}
          <div className="absolute bottom-4 left-4 z-10 bg-obsidian-950/85 backdrop-blur-md text-frost-100 p-4 rounded-2xl border border-teal-500/35 max-w-sm">
            <span className="text-[10px] uppercase tracking-widest font-semibold text-teal-300 block">
              Variant Preview
            </span>
            <h4 className="font-serif text-lg font-semibold">{selectedVehicle.name}</h4>
            <p className="text-xs text-frost-400 mt-0.5">
              Colour: <strong className="text-frost-100">{selectedColor}</strong> • Theme: <strong className="text-frost-100">{selectedLeather}</strong>
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
                    Exterior Colour: <strong className="text-teal-300 ml-1">{selectedColor}</strong>
                  </span>
                  <span className="text-[11px] text-frost-600">Metallic dual-tone options available</span>
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
                    Interior Theme: <strong className="text-teal-300 ml-1">{selectedLeather}</strong>
                  </span>
                  <span className="text-[11px] text-frost-600">Breathable perforated upholstery</span>
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
                    Cabin Audio & Drive Sound
                  </span>
                  <Badge variant="obsidian" size="sm">
                    Sound Demo
                  </Badge>
                </div>
                <p className="text-xs text-frost-500 mb-4">
                  Experience acoustic cabin insulation or active drive sound profiles.
                </p>

                {/* Sound Modes */}
                <div className="space-y-2">
                  {[
                    { id: 'quiet', title: 'Silent Cabin Mode (Noise Reduction)', desc: 'Zero traffic noise, active acoustic glass insulation.' },
                    { id: 'whir', title: 'Sport Mode Sound', desc: 'Dynamic synthesized acceleration sound.' },
                    { id: 'v8', title: 'Classic Engine Sound', desc: 'Subtle powertrain growl for enthusiastic highway driving.' },
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
                <span className="text-xs text-frost-200 font-semibold">Sound Profile: Active</span>
                <button
                  onClick={() => setIsPlayingSound(!isPlayingSound)}
                  className="text-xs text-teal-400 hover:text-teal-300 font-semibold hover:underline cursor-pointer"
                >
                  {isPlayingSound ? 'Mute Demo' : 'Play Sound Profile'}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Action */}
          <div className="pt-4 border-t border-obsidian-500/70 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-frost-500">
                Interested in booking this specification?
              </span>
              <p className="text-sm font-semibold text-frost-100">
                Estimated Delivery: 2-3 Weeks at Bengaluru Indiranagar Hub
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="teal"
                size="md"
                onClick={() => alert(`Home test drive request received for ${selectedVehicle.name}. Service Advisor Priya Deshmukh will confirm your slot.`)}
              >
                Book Home Test Drive
              </Button>
              <Button
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4 text-obsidian-950" />}
                iconPosition="right"
                onClick={() => onConsultCoPilot(selectedVehicle)}
              >
                Calculate EMI in AI Assistant
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
