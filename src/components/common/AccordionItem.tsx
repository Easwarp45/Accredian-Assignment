import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../../types';
import { cn } from '../../utils/cn';

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onToggle }) => {
  return (
    <div
      className={cn(
        'rounded-xl border transition-all duration-200 overflow-hidden',
        isOpen
          ? 'bg-slate-50 dark:bg-slate-900/60 border-blue-200 dark:border-blue-900/40 shadow-sm'
          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
      )}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded-xl"
        aria-expanded={isOpen}
      >
        <span className={cn('font-bold text-base md:text-lg pr-4', isOpen ? 'text-blue-600 dark:text-blue-400' : 'text-slate-900 dark:text-white')}>
          {item.question}
        </span>
        <div
          className={cn(
            'p-1.5 rounded-full transition-transform duration-300 shrink-0',
            isOpen ? 'rotate-180 bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
          )}
        >
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 pt-1 text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed border-t border-slate-100/60 dark:border-slate-800/60">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
