import React from 'react';
import { ContainerProps } from '../../types';
import { cn } from '../../utils/cn';

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  maxWidth = 'xl',
}) => {
  const maxWidthClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-7xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  return (
    <div className={cn('mx-auto w-full px-6 md:px-10', maxWidthClasses[maxWidth], className)}>
      {children}
    </div>
  );
};
