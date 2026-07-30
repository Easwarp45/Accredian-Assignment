import React from 'react';
import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'cyan' | 'teal' | 'success' | 'warning' | 'purple' | 'slate';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  size = 'md',
  icon,
  className = '',
}) => {
  const variantClasses = {
    blue: 'bg-blue-50 text-blue-700 border-blue-200',
    cyan: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    teal: 'bg-teal-50 text-teal-700 border-teal-200',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    warning: 'bg-amber-50 text-amber-700 border-amber-200',
    purple: 'bg-purple-50 text-purple-700 border-purple-200',
    slate: 'bg-slate-100 text-slate-700 border-slate-200'
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs gap-1',
    md: 'px-3 py-1 text-xs font-semibold gap-1.5'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border whitespace-nowrap tracking-wide uppercase',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
