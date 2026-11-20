import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'teal' | 'slate' | 'obsidian' | 'outline' | 'glass';
  hoverEffect?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hoverEffect = false,
  onClick,
}) => {
  const variantStyles = {
    default: 'bg-obsidian-800 border border-obsidian-500/80 shadow-soft',
    teal: 'bg-teal-950/70 border border-teal-800/60 shadow-soft',
    slate: 'bg-obsidian-700 border border-obsidian-500 shadow-soft',
    obsidian: 'bg-obsidian-900 text-frost-100 border border-obsidian-500/70 shadow-soft-lg',
    outline: 'bg-transparent border border-obsidian-500',
    glass: 'glass-card shadow-soft',
  };

  const hoverClass = hoverEffect
    ? 'transition-all duration-300 hover:shadow-soft-lg hover:border-teal-500/50 hover:-translate-y-0.5 cursor-pointer'
    : '';

  return (
    <div
      onClick={onClick}
      className={`rounded-2xl p-6 ${variantStyles[variant]} ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
};
