import React from 'react';
import { motion } from 'motion/react';
import { ButtonProps } from '../../types';
import { cn } from '../../utils/cn';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  className = '',
  icon,
  type = 'button',
  fullWidth = false,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-normal text-center select-none';

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm active:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700',
    secondary: 'bg-blue-50 text-blue-600 hover:bg-blue-100 active:bg-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:hover:bg-blue-900/40',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-950/20',
    ghost: 'text-slate-700 hover:bg-slate-100 hover:text-blue-600 bg-transparent dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-450',
    white: 'bg-white text-blue-600 hover:bg-slate-50 shadow-md font-bold dark:bg-slate-900 dark:text-blue-400 dark:hover:bg-slate-850'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-base gap-2',
    lg: 'px-7 py-3.5 text-lg gap-2.5'
  };

  return (
    <motion.button
      whileTap={disabled ? undefined : { scale: 0.98 }}
      whileHover={disabled ? undefined : { scale: 1.01 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? 'w-full' : '',
        className
      )}
    >
      {icon && <span className="inline-flex items-center shrink-0">{icon}</span>}
      <span>{children}</span>
    </motion.button>
  );
};
