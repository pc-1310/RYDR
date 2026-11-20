import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'teal' | 'violet' | 'amber' | 'emerald' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500/40 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variantStyles = {
    primary: 'bg-teal-500 text-obsidian-950 font-semibold hover:bg-teal-400 shadow-soft hover:shadow-glow-teal',
    secondary: 'bg-obsidian-700 text-frost-100 hover:bg-obsidian-600 border border-obsidian-500',
    teal: 'bg-teal-900/70 text-teal-200 hover:bg-teal-800/80 border border-teal-700/60',
    violet: 'bg-violet-700/30 text-violet-300 hover:bg-violet-700/50 border border-violet-500/45',
    amber: 'bg-amber-900/45 text-amber-300 hover:bg-amber-800/55 border border-amber-700/60',
    emerald: 'bg-emerald-900/50 text-emerald-300 hover:bg-emerald-800/60 border border-emerald-700/60',
    outline: 'bg-transparent text-frost-200 border border-obsidian-400 hover:bg-obsidian-700 hover:border-teal-500/60',
    ghost: 'bg-transparent text-frost-300 hover:bg-obsidian-700 hover:text-frost-100',
  };

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
