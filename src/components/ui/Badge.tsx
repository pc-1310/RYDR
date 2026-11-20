import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'teal' | 'amber' | 'violet' | 'azure' | 'crimson' | 'obsidian' | 'outline' | 'slate';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'teal',
  size = 'md',
  className = '',
  icon
}) => {
  const variantStyles = {
    emerald: 'bg-emerald-900/50 text-emerald-300 border-emerald-700/60',
    teal: 'bg-teal-900/70 text-teal-200 border-teal-700/60',
    amber: 'bg-amber-900/45 text-amber-300 border-amber-700/60',
    violet: 'bg-violet-700/30 text-violet-300 border-violet-500/45',
    azure: 'bg-azure-900/55 text-azure-300 border-azure-500/45',
    crimson: 'bg-crimson-900/50 text-crimson-300 border-crimson-600/50',
    obsidian: 'bg-obsidian-950 text-frost-100 border-obsidian-500',
    outline: 'bg-transparent text-frost-300 border-obsidian-400',
    slate: 'bg-obsidian-700 text-frost-400 border-obsidian-500',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 rounded-full font-medium',
    md: 'text-xs px-3 py-1 rounded-full font-medium tracking-wide',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 border transition-all duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="inline-block">{icon}</span>}
      {children}
    </span>
  );
};
