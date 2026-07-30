import React from 'react';
import { motion } from 'motion/react';
import { CardProps } from '../../types';
import { cn } from '../../utils/cn';

export const Card: React.FC<CardProps> = ({
  children,
  hover = true,
  className = '',
  padding = 'md',
  border = true,
  onClick,
}) => {
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      onClick={onClick}
      className={cn(
        'bg-white rounded-xl shadow-md transition-all duration-300 ease-in-out',
        border ? 'border border-slate-100' : '',
        hover ? 'hover:shadow-xl hover:border-blue-100 cursor-pointer' : '',
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </motion.div>
  );
};
