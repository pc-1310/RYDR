import React from 'react';
import {
  Crown,
  ShieldCheck,
  Zap,
  MapPin,
  Award,
  Key,
  FileCheck,
  TreePine,
  ArrowUpRight
} from 'lucide-react';
import { CLIENT_PROFILE } from '../../data/mockData';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const OwnershipLoyaltyModule: React.FC = () => {
  const privileges = [
    {
      title: 'Weekend Owners Drive',
      subtitle: 'RYDR Owners Club Convoy',
      desc: 'Highway convoy drive from Bengaluru to Coorg / Lonavala featuring scenic routes, curated resort stay, and group dinner.',
      date: 'September 12 - 14, 2026',
      status: 'Waitlist Reserved',
      icon: MapPin,
    },
    {
      title: 'EV Driving & Safety Workshop',
      subtitle: 'Highway Range & Longevity',
      desc: 'Highway range optimization tips, defensive driving drills, and live battery care masterclass with certified technical trainers.',
      date: 'Bi-Monthly Sessions',
      status: 'Active Pass',
      icon: Crown,
    },
    {
      title: 'Free Fast-Charging Credits',
      subtitle: 'Partner Highway Network',
      desc: '500 kWh/year complimentary high-speed charging credits valid at over 350+ partner highway fast-chargers across India.',
      date: 'Quarterly Renewal',
      status: 'Included',
      icon: Zap,
    },
    {
      title: 'Airport Lounge & Valet Parking',
      subtitle: 'BLR, DEL, BOM & HYD',
      desc: 'Complimentary airport lounge passes and reserved valet parking. Leave your keys — car is topped up, foam-washed, and cabin pre-cooled before you drive out.',
      date: 'Unlimited Usage',
      status: 'Included',
      icon: Key,
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-obsidian-800/95 rounded-3xl p-6 sm:p-8 border border-obsidian-500/80 shadow-soft">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-semibold text-frost-100">
                My Benefits
              </span>
              <Badge variant="amber" size="sm" icon={<Crown className="w-3.5 h-3.5 text-amber-300" />}>
                Gold Member
              </Badge>
              <Badge variant="emerald" size="sm">
                Member #RYDR-GOLD-8842
              </Badge>
            </div>
            <p className="text-xs sm:text-sm text-frost-500 max-w-2xl leading-relaxed">
              Smart perks designed for your daily commute and weekend getaways.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <Button
              variant="primary"
              size="sm"
              icon={<Award className="w-3.5 h-3.5 text-obsidian-950" />}
              onClick={() => alert("Digital Member Pass saved to phone wallet.")}
            >
              Add to Mobile Wallet
            </Button>
          </div>
        </div>
      </div>

      {/* Holographic Membership Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-obsidian-700 via-obsidian-900 to-obsidian-950 text-frost-100 p-7 sm:p-8 shadow-soft-lg border border-teal-500/40 aspect-[16/10] flex flex-col justify-between group">
            {/* Subtle holographic sheen effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-teal-500/15 to-violet-500/20 opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute -right-16 -top-16 w-52 h-52 rounded-full bg-teal-500/15 blur-2xl pointer-events-none" />

            {/* Card Header */}
            <div className="relative z-10 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-2xl font-bold tracking-widest text-frost-100">
                    RYDR
                  </span>
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-amber-300 bg-amber-900/40 border border-amber-500/40 px-2 py-0.5 rounded-full">
                    Owners Club
                  </span>
                </div>
                <p className="text-[10px] text-frost-500 tracking-wider uppercase mt-1">
                  Plus Membership Pass
                </p>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-obsidian-800/80 backdrop-blur-md border border-teal-500/35 flex items-center justify-center">
                <Crown className="w-5 h-5 text-amber-300" />
              </div>
            </div>

            {/* Chip & NFC Graphic */}
            <div className="relative z-10 my-4 flex items-center gap-3">
              <div className="w-11 h-8 rounded-lg bg-gradient-to-r from-amber-300 to-amber-500 border border-amber-400/50 shadow-inner flex items-center justify-center">
                <div className="w-8 h-5 border border-amber-800/40 rounded-xs" />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-teal-200/80">
                SECURE SMART PASS
              </span>
            </div>

            {/* Card Footer */}
            <div className="relative z-10 flex items-end justify-between border-t border-obsidian-500/70 pt-4">
              <div>
                <p className="text-[10px] text-frost-600 uppercase tracking-widest font-mono">
                  Cardholder
                </p>
                <p className="font-serif text-lg font-medium tracking-wide text-frost-100">
                  {CLIENT_PROFILE.name}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-frost-600 uppercase tracking-widest font-mono">
                  Member ID
                </p>
                <p className="font-mono text-xs font-semibold text-teal-300 tracking-wider">
                  {CLIENT_PROFILE.memberId}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Member Tier Benefits Summary */}
        <div className="lg:col-span-6 space-y-4">
          <div className="p-6 rounded-3xl bg-obsidian-800 border border-obsidian-500/80 shadow-soft space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-frost-600 block">
                  Membership Tier Status
                </span>
                <h4 className="font-serif text-xl font-semibold text-frost-100">
                  {CLIENT_PROFILE.name} • Gold Member
                </h4>
              </div>
              <Badge variant="emerald" size="sm">
                Active Through 2028
              </Badge>
            </div>

            <p className="text-xs text-frost-500 leading-relaxed">
              Smart perks designed for your daily commute and weekend getaways. All benefits renew annually with zero maintenance charges for verified RYDR owners.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-obsidian-900 border border-obsidian-500/70">
                <span className="text-[10px] uppercase font-semibold text-frost-600 block">
                  Roadside Assistance
                </span>
                <span className="text-xs font-semibold text-frost-100 block">24/7 Dedicated (RSA)</span>
              </div>
              <div className="p-3 rounded-2xl bg-obsidian-900 border border-obsidian-500/70">
                <span className="text-[10px] uppercase font-semibold text-frost-600 block">
                  Free Service Pickup & Drop
                </span>
                <span className="text-xs font-semibold text-frost-100 block">4x / Year Included</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Member Perks & Offers Grid */}
      <div className="space-y-4">
        <div>
          <h3 className="font-serif text-2xl font-semibold text-frost-100 tracking-tight">
            Member Perks & Offers
          </h3>
          <p className="text-xs text-frost-500">
            Exclusive community drives, charging benefits, and travel privileges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {privileges.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-obsidian-800 p-6 rounded-3xl border border-obsidian-500/80 hover:border-teal-500/50 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-obsidian-900 flex items-center justify-center border border-obsidian-500/70">
                      <Icon className="w-5 h-5 text-teal-400" />
                    </div>
                    <Badge variant={p.status === 'Active Pass' ? 'emerald' : 'teal'} size="sm">
                      {p.status}
                    </Badge>
                  </div>
                  <span className="text-[10px] uppercase font-semibold text-frost-600 tracking-wider block mb-1">
                    {p.subtitle}
                  </span>
                  <h4 className="font-serif text-lg font-semibold text-frost-100 mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs text-frost-500 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-obsidian-500/60 flex items-center justify-between text-xs font-semibold text-frost-200">
                  <span className="text-frost-600 font-normal">{p.date}</span>
                  <button
                    onClick={() => alert(`Registration confirmed for ${p.title}. Details sent to your email.`)}
                    className="text-teal-400 hover:text-teal-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Digital RC & Car Health Report */}
      <div className="bg-obsidian-800 rounded-3xl p-6 sm:p-8 border border-obsidian-500/80 shadow-soft space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-obsidian-500/70">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-frost-100 tracking-tight">
              Digital RC & Car Health Report
            </h3>
            <p className="text-xs text-frost-500">
              Verified service history, assured resale value & fuel savings tracker
            </p>
          </div>
          <Badge variant="obsidian" size="sm" icon={<FileCheck className="w-3.5 h-3.5 text-teal-400" />}>
            Verified Digital Record
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-obsidian-900 border border-obsidian-500/70 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-frost-200">
              <TreePine className="w-4 h-4 text-emerald-400" />
              <span>CO₂ Saved & Fuel Savings</span>
            </div>
            <div className="font-serif text-2xl font-bold text-frost-100">
              1.8 Tons CO₂ Saved
            </div>
            <p className="text-[11px] text-frost-500">
              Approximately ₹1.4 Lakhs saved on fuel costs compared to petrol sedans.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-obsidian-900 border border-obsidian-500/70 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-frost-200">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Assured Buyback Value</span>
            </div>
            <div className="font-serif text-2xl font-bold text-frost-100">
              ₹12.5 Lakhs
            </div>
            <p className="text-[11px] text-frost-500">
              Guaranteed assured buyback value after 3 years under RYDR Assured program.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-obsidian-900 border border-obsidian-500/70 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-frost-200">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>8-Year / 1,60,000 km</span>
            </div>
            <div className="font-serif text-2xl font-bold text-frost-100">
              Battery Warranty
            </div>
            <p className="text-[11px] text-frost-500">
              Comprehensive 8-Year / 1,60,000 km manufacturer warranty on battery and motor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
