import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';
import { CLIENT_PROFILE } from '../../data/mockData';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface ConciergeStatusCardProps {
  onStartChat: (initialPrompt?: string) => void;
}

export const ConciergeStatusCard: React.FC<ConciergeStatusCardProps> = ({
  onStartChat,
}) => {
  return (
    <Card variant="glass" className="p-6 mb-8 border border-obsidian-500/90">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Advisor Details */}
        <div className="lg:col-span-5 flex items-center gap-4">
          <div className="relative">
            <img
              src={CLIENT_PROFILE.assignedConcierge.avatar}
              alt={CLIENT_PROFILE.assignedConcierge.name}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-teal-500/70 shadow-soft"
            />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-obsidian-800" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <Badge variant="emerald" size="sm">
                Service Advisor
              </Badge>
              <span className="text-[10px] text-emerald-300 font-semibold flex items-center gap-1">
                ● Online & On-Call
              </span>
            </div>
            <h4 className="font-serif text-lg font-semibold text-frost-100">
              {CLIENT_PROFILE.assignedConcierge.name}
            </h4>
            <p className="text-xs text-frost-500">
              {CLIENT_PROFILE.assignedConcierge.title} • Bengaluru Indiranagar Hub
            </p>
          </div>
        </div>

        {/* Quick Query Bar */}
        <div className="lg:col-span-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="flex-1 p-3 rounded-2xl bg-obsidian-900 border border-obsidian-500/80 flex items-center gap-2 text-xs text-frost-400">
            <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
            <span className="italic truncate">
              "Priya, prepare an EMI and feature comparison between the Spectre EV and Lumina SUV."
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="primary"
              size="sm"
              icon={<MessageSquare className="w-3.5 h-3.5" />}
              onClick={() => onStartChat("Priya, prepare an EMI and feature comparison between the Spectre EV and Lumina SUV.")}
            >
              Ask AI Assistant
            </Button>
            <Button
              variant="secondary"
              size="sm"
              icon={<Phone className="w-3.5 h-3.5 text-teal-300" />}
              onClick={() => alert(`Calling Priya Deshmukh at RYDR Service Desk (Toll-Free: 1800-102-RYDR).`)}
            >
              Call Advisor
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
