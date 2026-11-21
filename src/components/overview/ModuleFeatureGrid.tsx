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
      title: 'AI Car Assistant',
      subtitle: 'Compare & Buy',
      description: 'Consult our smart AI assistant for vehicle recommendations, EMI & loan calculations, variant comparison, and booking doorstep test drives.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      badge: 'Smart Assistant',
      badgeVariant: 'teal' as const,
      accentColor: 'border-teal-800/70 hover:border-teal-400',
      icon: Sparkles,
      highlights: ['Variant & Budget Filtering', 'Side-by-Side Comparison', 'EMI & Loan Calculator', 'Home Test Drive Booking'],
    },
    {
      id: 'service' as NavModule,
      title: 'Service & Care',
      subtitle: 'Health & Booking',
      description: 'Smart service reminders and live car health diagnostics. Book free doorstep pickup & drop service and track real-time maintenance updates.',
      image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
      badge: 'All OK',
      badgeVariant: 'emerald' as const,
      accentColor: 'border-emerald-800/70 hover:border-emerald-400',
      icon: ShieldCheck,
      highlights: ['Tyre Pressure & Brake Wear', 'High-Voltage Battery Health', 'Free Doorstep Pickup (4x/Yr)', 'Dealership Verified Logbook'],
    },
    {
      id: 'showroom' as NavModule,
      title: '360° Showroom',
      subtitle: 'Build & Price',
      description: 'Explore cars in 360° view. Review paint shades, preview interior dual-tone themes, and demo quiet electric cabin audio soundscapes.',
      image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=80',
      badge: '360° View',
      badgeVariant: 'violet' as const,
      accentColor: 'border-violet-700/60 hover:border-violet-400',
      icon: Layers,
      highlights: ['360° Exterior & Interior View', 'Colour & Trim Selector', 'Cabin Audio Sound Demo', 'Book Home Test Drive'],
    },
    {
      id: 'loyalty' as NavModule,
      title: 'My Benefits',
      subtitle: 'Rewards & Warranty',
      description: 'Owner benefits tailored for your daily commute and weekend trips. Access road trip convoy drives, charging credits, and battery warranty.',
      image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=800&q=80',
      badge: 'Gold Member',
      badgeVariant: 'amber' as const,
      accentColor: 'border-amber-800/70 hover:border-amber-400',
      icon: Crown,
      highlights: ['Digital RC & Car Passport', 'Weekend Owners Drive (Coorg)', '500 kWh Free Fast-Charging', 'Airport Lounge & Valet Access'],
    },
  ];

  return (
    <div className="space-y-4 mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-serif text-2xl font-semibold text-frost-100 tracking-tight">
            Customer Hub
          </h3>
          <p className="text-sm text-frost-500">
            Quickly access your car health, showroom, and owner benefits
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
                <span>Open {m.title}</span>
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
