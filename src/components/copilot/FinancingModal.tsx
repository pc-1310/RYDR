import React, { useState } from 'react';
import { Check, Send } from 'lucide-react';
import type { Vehicle } from '../../types';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface FinancingModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicle: Vehicle | null;
}

export const FinancingModal: React.FC<FinancingModalProps> = ({
  isOpen,
  onClose,
  vehicle,
}) => {
  const [termMonths, setTermMonths] = useState<number>(36);
  const [downPayment, setDownPayment] = useState<number>(15000);
  const [planType, setPlanType] = useState<'lease' | 'purchase'>('lease');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!vehicle) return null;

  // Financial calculations
  const price = vehicle.startingPrice;
  const netAmount = Math.max(0, price - downPayment);
  const interestRate = planType === 'lease' ? 0.032 : 0.045;
  const monthlyPayment = planType === 'lease'
    ? Math.round((netAmount * 0.55) / termMonths + (netAmount * (interestRate / 12)))
    : Math.round((netAmount * (interestRate / 12)) / (1 - Math.pow(1 + interestRate / 12, -termMonths)));

  const handleConfirm = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Bespoke Acquisition Calculator"
      subtitle={`Tailored financial arrangement for ${vehicle.name}`}
      maxWidth="lg"
    >
      <div className="space-y-6">
        {/* Vehicle Header */}
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-obsidian-900 border border-obsidian-500/80 shadow-xs">
          <img
            src={vehicle.exteriorImage}
            alt={vehicle.name}
            className="w-20 h-14 rounded-xl object-cover border border-obsidian-500/50"
          />
          <div className="flex-1 min-w-0">
            <h4 className="font-serif text-base font-semibold text-frost-100 truncate">
              {vehicle.name}
            </h4>
            <p className="text-xs text-frost-500 truncate">
              MSRP Base: ${vehicle.startingPrice.toLocaleString()} • {vehicle.propulsion}
            </p>
          </div>
          <Badge variant="amber" size="sm">
            Obsidian Privileged Rates
          </Badge>
        </div>

        {/* Plan Type Selector */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-obsidian-900 rounded-2xl border border-obsidian-500/80">
          <button
            onClick={() => setPlanType('lease')}
            className={`py-2.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
              planType === 'lease'
                ? 'bg-teal-500 text-obsidian-950 shadow-soft'
                : 'text-frost-500 hover:text-frost-100'
            }`}
          >
            Atelier Bespoke Lease (Recommended)
          </button>
          <button
            onClick={() => setPlanType('purchase')}
            className={`py-2.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
              planType === 'purchase'
                ? 'bg-teal-500 text-obsidian-950 shadow-soft'
                : 'text-frost-500 hover:text-frost-100'
            }`}
          >
            Private Portfolio Financing
          </button>
        </div>

        {/* Controls: Term and Down Payment */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs text-frost-300 font-medium mb-2">
              <span>Term Duration</span>
              <strong className="text-sm font-serif text-teal-300">{termMonths} Months</strong>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[24, 36, 48, 60].map((t) => (
                <button
                  key={t}
                  onClick={() => setTermMonths(t)}
                  className={`py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                    termMonths === t
                      ? 'bg-teal-900/65 text-teal-200 border-teal-400 shadow-xs'
                      : 'bg-obsidian-900 text-frost-400 border-obsidian-500 hover:bg-obsidian-700'
                  }`}
                >
                  {t} mo
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-xs text-frost-300 font-medium mb-1">
              <span>Initial Capital Reduction (Down Payment)</span>
              <strong className="text-sm font-serif text-teal-300">${downPayment.toLocaleString()}</strong>
            </div>
            <input
              type="range"
              min="5000"
              max="50000"
              step="2500"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full accent-teal-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-frost-600 mt-1">
              <span>$5,000</span>
              <span>$25,000</span>
              <span>$50,000</span>
            </div>
          </div>
        </div>

        {/* Result Card */}
        <div className="p-5 rounded-2xl bg-teal-950/60 border border-teal-700/50 text-center space-y-2">
          <span className="text-[11px] uppercase tracking-wider text-teal-300 font-semibold">
            Estimated Monthly Investment
          </span>
          <div className="font-serif text-4xl font-bold text-frost-100">
            ${monthlyPayment.toLocaleString()}
            <span className="text-sm font-sans font-normal text-frost-500"> / mo</span>
          </div>
          <p className="text-[11px] text-frost-400">
            Excludes local luxury excise & licensing. Includes all scheduled White-Glove atelier maintenance.
          </p>
        </div>

        {/* Included Privileges */}
        <div className="space-y-2 pt-1 border-t border-obsidian-500/70 text-xs text-frost-400">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Complimentary door-to-door enclosed trailer delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>36 months White-Glove Valet service & replacement loaner</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Zero penalty early trade-in privileges for next generation models</span>
          </div>
        </div>

        {/* Submit */}
        {submitted ? (
          <div className="p-3 bg-emerald-900/40 border border-emerald-700/60 text-emerald-200 rounded-2xl text-center text-xs font-semibold flex items-center justify-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            Proposal dispatched to Clara Beauchamp for priority review!
          </div>
        ) : (
          <Button
            variant="primary"
            size="md"
            fullWidth
            icon={<Send className="w-4 h-4 text-obsidian-950" />}
            onClick={handleConfirm}
          >
            Forward Term Sheet to Private Concierge
          </Button>
        )}
      </div>
    </Modal>
  );
};
