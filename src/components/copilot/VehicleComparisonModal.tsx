import React from 'react';
import { Calendar, Calculator, Sparkles } from 'lucide-react';
import type { Vehicle } from '../../types';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface VehicleComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicles: Vehicle[];
  onBookTestDrive: (vehicle: Vehicle) => void;
  onCalculateFinance: (vehicle: Vehicle) => void;
}

export const VehicleComparisonModal: React.FC<VehicleComparisonModalProps> = ({
  isOpen,
  onClose,
  vehicles,
  onBookTestDrive,
  onCalculateFinance,
}) => {
  if (vehicles.length < 2) return null;
  const [vehicleA, vehicleB] = vehicles;

  const comparisonRows = [
    { label: 'Category', valA: vehicleA.category, valB: vehicleB.category },
    { label: 'Propulsion', valA: vehicleA.propulsion, valB: vehicleB.propulsion },
    { label: 'Starting Price', valA: `$${vehicleA.startingPrice.toLocaleString()}`, valB: `$${vehicleB.startingPrice.toLocaleString()}` },
    { label: 'Est. Lease / Mo', valA: `~$${Math.round(vehicleA.startingPrice * 0.012).toLocaleString()}`, valB: `~$${Math.round(vehicleB.startingPrice * 0.012).toLocaleString()}` },
    { label: 'Acceleration (0-60)', valA: vehicleA.acceleration, valB: vehicleB.acceleration },
    { label: 'Power Output', valA: vehicleA.power, valB: vehicleB.power },
    { label: 'Range / Range EPA', valA: vehicleA.rangeOrMpg, valB: vehicleB.rangeOrMpg },
    { label: 'Top Track Speed', valA: vehicleA.topSpeed, valB: vehicleB.topSpeed },
    { label: 'Cabin Configuration', valA: vehicleA.seating, valB: vehicleB.seating },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Atelier Comparative Analysis"
      subtitle="Side-by-side engineering specifications and lifestyle suitability"
      maxWidth="2xl"
    >
      <div className="space-y-6">
        {/* Vehicles Header Cards */}
        <div className="grid grid-cols-2 gap-4">
          {[vehicleA, vehicleB].map((v) => (
            <div key={v.id} className="p-4 rounded-2xl bg-obsidian-900 border border-obsidian-500/80 shadow-xs">
              <div className="aspect-[16/10] rounded-xl overflow-hidden mb-3 border border-obsidian-500/50">
                <img src={v.exteriorImage} alt={v.name} className="w-full h-full object-cover" />
              </div>
              <Badge variant="obsidian" size="sm" className="mb-1">
                {v.category}
              </Badge>
              <h4 className="font-serif text-lg font-semibold text-frost-100 truncate">
                {v.name}
              </h4>
              <p className="text-xs text-frost-500 font-serif italic mb-3">
                {v.subtitle}
              </p>
              <div className="flex flex-col gap-2">
                <Button
                  variant="primary"
                  size="sm"
                  fullWidth
                  icon={<Calendar className="w-3 h-3 text-obsidian-950" />}
                  onClick={() => {
                    onClose();
                    onBookTestDrive(v);
                  }}
                >
                  Test Drive {v.name.split(' ')[1]}
                </Button>
                <Button
                  variant="teal"
                  size="sm"
                  fullWidth
                  icon={<Calculator className="w-3 h-3 text-teal-200" />}
                  onClick={() => {
                    onClose();
                    onCalculateFinance(v);
                  }}
                >
                  Finance Spec
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Spec Comparison Table */}
        <div className="border border-obsidian-500/80 rounded-2xl overflow-hidden bg-obsidian-900">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-obsidian-950/70 border-b border-obsidian-500 text-frost-600 uppercase tracking-wider text-[10px]">
                <th className="py-3 px-4 text-left font-semibold">Specification</th>
                <th className="py-3 px-4 text-left font-semibold text-teal-300">{vehicleA.name}</th>
                <th className="py-3 px-4 text-left font-semibold text-teal-300">{vehicleB.name}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-obsidian-500/50">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-obsidian-900' : 'bg-obsidian-800/60'}>
                  <td className="py-2.5 px-4 font-medium text-frost-500">{row.label}</td>
                  <td className="py-2.5 px-4 font-semibold text-frost-100">{row.valA}</td>
                  <td className="py-2.5 px-4 font-semibold text-frost-100">{row.valB}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Co-Pilot Editorial Take */}
        <div className="p-4 rounded-2xl bg-teal-950/60 border border-teal-700/50 text-xs">
          <div className="flex items-center gap-2 font-semibold text-frost-100 mb-1">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>AI Concierge Advisory Note:</span>
          </div>
          <p className="text-frost-300 leading-relaxed">
            Choose the <strong className="text-frost-100">{vehicleA.name}</strong> if priority leans toward acoustic isolation, low center-of-gravity touring, and zero local emissions. Choose the <strong className="text-frost-100">{vehicleB.name}</strong> if you demand multi-passenger grand touring, elevated all-weather stance, and hybrid range endurance.
          </p>
        </div>
      </div>
    </Modal>
  );
};
