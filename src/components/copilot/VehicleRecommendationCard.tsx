import React from 'react';
import { Sparkles, Calendar, Scale, Calculator, Check } from 'lucide-react';
import type { Vehicle } from '../../types';
import { formatINR } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface VehicleRecommendationCardProps {
  vehicle: Vehicle;
  onCompare?: (vehicle: Vehicle) => void;
  onCalculateFinance?: (vehicle: Vehicle) => void;
  onBookTestDrive?: (vehicle: Vehicle) => void;
}

export const VehicleRecommendationCard: React.FC<VehicleRecommendationCardProps> = ({
  vehicle,
  onCompare,
  onCalculateFinance,
  onBookTestDrive,
}) => {
  return (
    <div className="bg-obsidian-800 rounded-3xl border border-obsidian-500/90 shadow-soft overflow-hidden my-3 max-w-2xl transition-all hover:shadow-soft-lg hover:border-teal-500/50">
      {/* Vehicle Photography Banner */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-obsidian-950">
        <img
          src={vehicle.exteriorImage}
          alt={vehicle.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          {vehicle.statusBadge && (
            <Badge variant="obsidian" size="sm">
              {vehicle.statusBadge}
            </Badge>
          )}
          {vehicle.matchScore && (
            <Badge variant="emerald" size="sm" icon={<Sparkles className="w-3 h-3 text-emerald-300" />}>
              {vehicle.matchScore}% Lifestyle Match
            </Badge>
          )}
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="teal" size="sm">
            {vehicle.category}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-obsidian-950/25 to-transparent flex items-end p-4 text-frost-100">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight">
              {vehicle.name}
            </h4>
            <p className="text-xs text-teal-300 font-medium">
              {vehicle.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Content & Specs */}
      <div className="p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-obsidian-500/60 pb-3">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-frost-600 block">
              Ex-Showroom Price
            </span>
            <span className="font-serif text-2xl font-bold text-frost-100">
              {formatINR(vehicle.startingPrice)}
            </span>
            <span className="text-xs text-frost-500 ml-1.5">(Ex-showroom Bengaluru)</span>
          </div>
          <div className="text-right">
            <span className="text-[11px] uppercase tracking-wider text-frost-600 block">
              Estimated EMI
            </span>
            <span className="text-sm font-semibold text-teal-300">
              ~₹{Math.round(vehicle.startingPrice * 0.018).toLocaleString('en-IN')}/mo
            </span>
          </div>
        </div>

        {/* Highlight Spec Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="p-2.5 rounded-xl bg-obsidian-900 border border-obsidian-500/70 text-center">
            <span className="text-[10px] uppercase text-frost-600 block">Propulsion</span>
            <span className="text-xs font-semibold text-frost-100 truncate block">{vehicle.propulsion}</span>
          </div>
          <div className="p-2.5 rounded-xl bg-obsidian-900 border border-obsidian-500/70 text-center">
            <span className="text-[10px] uppercase text-frost-600 block">Acceleration</span>
            <span className="text-xs font-semibold text-frost-100 truncate block">{vehicle.acceleration}</span>
          </div>
          <div className="p-2.5 rounded-xl bg-obsidian-900 border border-obsidian-500/70 text-center">
            <span className="text-[10px] uppercase text-frost-600 block">ARAI Range / Power</span>
            <span className="text-xs font-semibold text-frost-100 truncate block">{vehicle.rangeOrMpg}</span>
          </div>
          <div className="p-2.5 rounded-xl bg-obsidian-900 border border-obsidian-500/70 text-center">
            <span className="text-[10px] uppercase text-frost-600 block">Seating Capacity</span>
            <span className="text-xs font-semibold text-frost-100 truncate block">{vehicle.seating}</span>
          </div>
        </div>

        {/* Description snippet */}
        <p className="text-xs text-frost-400 leading-relaxed">
          {vehicle.description}
        </p>

        {/* Curated Features */}
        <div className="space-y-1.5 pt-1">
          <span className="text-[11px] font-semibold text-frost-200 tracking-wide block">
            Key Highlights & Features:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {vehicle.curatedFeatures.map((feat, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs text-frost-400">
                <Check className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-obsidian-500/60">
          <Button
            variant="primary"
            size="sm"
            icon={<Calendar className="w-3.5 h-3.5 text-obsidian-950" />}
            onClick={() => onBookTestDrive?.(vehicle)}
          >
            Book Home Test Drive
          </Button>

          <Button
            variant="teal"
            size="sm"
            icon={<Calculator className="w-3.5 h-3.5 text-teal-200" />}
            onClick={() => onCalculateFinance?.(vehicle)}
          >
            EMI Calculator
          </Button>

          <Button
            variant="outline"
            size="sm"
            icon={<Scale className="w-3.5 h-3.5" />}
            onClick={() => onCompare?.(vehicle)}
          >
            Compare
          </Button>
        </div>
      </div>
    </div>
  );
};
