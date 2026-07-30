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
        isOpen ? 'bg-slate-50 border-blue-200 shadow-sm' : 'bg-white border-slate-200 hover:border-slate-300'
      )}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded-xl"
        aria-expanded={isOpen}
      >
        <span className={cn('font-bold text-base md:text-lg pr-4', isOpen ? 'text-blue-600' : 'text-slate-900')}>
          {item.question}
        </span>
        <div
          className={cn(
            'p-1.5 rounded-full transition-transform duration-300 shrink-0',
            isOpen ? 'rotate-180 bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'
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
            <div className="px-6 pb-6 pt-1 text-slate-600 text-sm md:text-base leading-relaxed border-t border-slate-100/60">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
