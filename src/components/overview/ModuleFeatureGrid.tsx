import React from 'react';
import { Sparkles, ShieldCheck, Layers, Crown, ArrowRight, CheckCircle2 } from 'lucide-react';
import type { NavModule } from '../../types';
import { Badge } from '../ui/Badge';

interface ModuleFeatureGridProps {
  onSelectModule: (module: NavModule) => void;
}

export const ModuleFeatureGrid: React.FC<ModuleFeatureGridProps> = ({
  onSelectModule,
}) => {
  const modules = [
    {
      id: 'copilot' as NavModule,
      title: 'AI Buyer Co-Pilot',
      subtitle: 'Intelligent Automotive Concierge',
      description: 'Consult our simulated intelligence engine for vehicle recommendations, lease calculations, comparison matrices, and private home test drives.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      badge: 'Interactive Experience',
      badgeVariant: 'teal' as const,
      accentColor: 'border-teal-800/70 hover:border-teal-400',
      icon: Sparkles,
      highlights: ['Lifestyle & Spec Filtering', 'Side-by-Side Comparison', 'Bespoke Lease Calculator', 'Home Test Drive Booking'],
    },
    {
      id: 'service' as NavModule,
      title: 'Service Companion',
      subtitle: 'Predictive Telematics & Valet',
      description: 'Comprehensive digital health telemetry for your vehicle. Schedule door-to-door concierge valet maintenance and track technician diagnostics in real time.',
      image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
      badge: 'Telemetry Active',
      badgeVariant: 'emerald' as const,
      accentColor: 'border-emerald-800/70 hover:border-emerald-400',
      icon: ShieldCheck,
      highlights: ['Tire & Brake Wear Telematics', 'High-Voltage Battery Diagnostics', 'Valet Pickup & Return Tracker', 'Authorized Atelier Logbook'],
    },
    {
      id: 'showroom' as NavModule,
      title: 'Showroom Experience',
      subtitle: '360° Studio & Atelier Spec',
      description: 'Step into the RYDR virtual atelier. Explore high-resolution 360 walkarounds, switch exterior bespoke paint finishes, and audition acoustic motor soundscapes.',
      image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=80',
      badge: 'Virtual Atelier',
      badgeVariant: 'violet' as const,
      accentColor: 'border-violet-700/60 hover:border-violet-400',
      icon: Layers,
      highlights: ['360° Exterior & Interior Gallery', 'Bespoke Color Swatch Configurator', 'Acoustic Soundstage Simulator', 'Private Studio Appointment'],
    },
    {
      id: 'loyalty' as NavModule,
      title: 'Ownership & Loyalty',
      subtitle: 'Obsidian Tier Private Circle',
      description: 'Your passport to ultra-exclusive driving journeys. Private airfield track sessions, Swiss Alps grand tours, luxury jet transfers, and immutable vehicle records.',
      image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80',
      badge: 'Obsidian VIP',
      badgeVariant: 'amber' as const,
      accentColor: 'border-amber-800/70 hover:border-amber-400',
      icon: Crown,
      highlights: ['Holographic Digital Membership Card', 'Exclusive Grand Tour Reservations', 'Digital Provenance Ledger', 'VIP Airport Valet Privileges'],
    },
  ];

  return (
    <div className="space-y-4 mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-serif text-2xl font-semibold text-frost-100 tracking-tight">
            Client Experience Modules
          </h3>
          <p className="text-sm text-frost-500">
            Seamlessly navigate our digital automotive ecosystem
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.id}
              onClick={() => onSelectModule(m.id)}
              className={`group bg-obsidian-800 rounded-3xl p-6 border transition-all duration-300 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 cursor-pointer flex flex-col justify-between ${m.accentColor}`}
            >
              <div>
                {/* Image and Header */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-5 border border-obsidian-500/70">
                  <img
                    src={m.image}
                    alt={m.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-obsidian-950/20 to-transparent flex items-end justify-between p-4">
                    <Badge variant={m.badgeVariant} size="sm">
                      {m.badge}
                    </Badge>
                    <div className="w-8 h-8 rounded-full bg-obsidian-900/90 backdrop-blur-sm border border-obsidian-500 flex items-center justify-center text-teal-300 shadow-soft group-hover:bg-teal-500 group-hover:text-obsidian-950 group-hover:border-teal-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 mb-3">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-frost-600">
                    {m.subtitle}
                  </span>
                  <h4 className="font-serif text-xl font-medium text-frost-100 group-hover:text-teal-300 transition-colors">
                    {m.title}
                  </h4>
                  <p className="text-xs text-frost-500 line-clamp-2 leading-relaxed">
                    {m.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="grid grid-cols-2 gap-2 my-4 pt-3 border-t border-obsidian-500/60">
                  {m.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-frost-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span className="truncate">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button Link */}
              <div className="flex items-center justify-between pt-3 border-t border-obsidian-500/50 text-xs font-semibold text-frost-200 group-hover:text-teal-300">
                <span>Enter {m.title}</span>
                <div className="flex items-center gap-1 transition-transform duration-200 group-hover:translate-x-1">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
