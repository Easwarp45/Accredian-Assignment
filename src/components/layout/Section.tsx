import React from 'react';
import { motion } from 'motion/react';
import { SectionProps } from '../../types';
import { cn } from '../../utils/cn';
import { Container } from './Container';

export const Section: React.FC<SectionProps> = ({
  children,
  bgColor = 'bg-white',
  padding = 'py-16 md:py-24',
  className = '',
  id,
}) => {
  return (
    <section id={id} className={cn('relative w-full overflow-hidden', bgColor, padding, className)}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <Container>{children}</Container>
      </motion.div>
    </section>
  );
};
