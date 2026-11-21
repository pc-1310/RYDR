import React, { useState } from 'react';
import { Check, Send } from 'lucide-react';
import type { Vehicle } from '../../types';
import { formatINR } from '../../types';
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
  const [termMonths, setTermMonths] = useState<number>(60);
  const [downPayment, setDownPayment] = useState<number>(300000);
  const [planType, setPlanType] = useState<'loan' | 'lease'>('loan');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!vehicle) return null;

  // Financial calculations in INR
  const price = vehicle.startingPrice;
  const netLoanAmount = Math.max(0, price - downPayment);
  const annualInterestRate = planType === 'loan' ? 0.085 : 0.075;
  const monthlyRate = annualInterestRate / 12;
  const monthlyPayment = Math.round(
    (netLoanAmount * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
    (Math.pow(1 + monthlyRate, termMonths) - 1)
  );

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
      title="EMI & Loan Calculator"
      subtitle={`Tailored financing plan for ${vehicle.name}`}
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
              Ex-Showroom: {formatINR(vehicle.startingPrice)} • {vehicle.propulsion}
            </p>
          </div>
          <Badge variant="amber" size="sm">
            Special Rate 8.5%
          </Badge>
        </div>

        {/* Plan Type Selector */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-obsidian-900 rounded-2xl border border-obsidian-500/80">
          <button
            onClick={() => setPlanType('loan')}
            className={`py-2.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
              planType === 'loan'
                ? 'bg-teal-500 text-obsidian-950 shadow-soft'
                : 'text-frost-500 hover:text-frost-100'
            }`}
          >
            Bank Auto Loan (EMI)
          </button>
          <button
            onClick={() => setPlanType('lease')}
            className={`py-2.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
              planType === 'lease'
                ? 'bg-teal-500 text-obsidian-950 shadow-soft'
                : 'text-frost-500 hover:text-frost-100'
            }`}
          >
            Corporate Smart Lease
          </button>
        </div>

        {/* Controls: Term and Down Payment */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs text-frost-300 font-medium mb-2">
              <span>Loan Tenure</span>
              <strong className="text-sm font-serif text-teal-300">{termMonths} Months ({(termMonths / 12).toFixed(0)} Years)</strong>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[36, 48, 60, 84].map((t) => (
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
              <span>Down Payment</span>
              <strong className="text-sm font-serif text-teal-300">{formatINR(downPayment)}</strong>
            </div>
            <input
              type="range"
              min="100000"
              max="1000000"
              step="50000"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full accent-teal-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-frost-600 mt-1">
              <span>₹1.0 Lakh</span>
              <span>₹5.0 Lakhs</span>
              <span>₹10.0 Lakhs</span>
            </div>
          </div>
        </div>

        {/* Result Card */}
        <div className="p-5 rounded-2xl bg-teal-950/60 border border-teal-700/50 text-center space-y-2">
          <span className="text-[11px] uppercase tracking-wider text-teal-300 font-semibold">
            Estimated Monthly EMI
          </span>
          <div className="font-serif text-4xl font-bold text-frost-100">
            ₹{monthlyPayment.toLocaleString('en-IN')}
            <span className="text-sm font-sans font-normal text-frost-500"> / mo</span>
          </div>
          <p className="text-[11px] text-frost-400">
            Calculated at 8.5% p.a. Indicative figure excluding insurance & RTO road tax.
          </p>
        </div>

        {/* Included Privileges */}
        <div className="space-y-2 pt-1 border-t border-obsidian-500/70 text-xs text-frost-400">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Complimentary doorstep delivery & registration support</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>8-Year / 1,60,000 km battery & motor warranty</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>24/7 Roadside Assistance & 4x free doorstep service pickups per year</span>
          </div>
        </div>

        {/* Submit */}
        {submitted ? (
          <div className="p-3 bg-emerald-900/40 border border-emerald-700/60 text-emerald-200 rounded-2xl text-center text-xs font-semibold flex items-center justify-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            EMI inquiry forwarded to Service Advisor Priya Deshmukh!
          </div>
        ) : (
          <Button
            variant="primary"
            size="md"
            fullWidth
            icon={<Send className="w-4 h-4 text-obsidian-950" />}
            onClick={handleConfirm}
          >
            Submit Loan Inquiry to Advisor
          </Button>
        )}
      </div>
    </Modal>
  );
};
