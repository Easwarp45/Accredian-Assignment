import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'success',
  isVisible,
  onClose,
  duration = 4000,
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />,
    info: <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />,
  };

  const borderColors = {
    success: 'border-emerald-200 dark:border-emerald-900/40 bg-white dark:bg-slate-950/20 text-slate-800 dark:text-slate-100',
    error: 'border-rose-200 dark:border-rose-900/40 bg-white dark:bg-slate-950/20 text-slate-800 dark:text-slate-100',
    info: 'border-blue-200 dark:border-blue-900/40 bg-white dark:bg-slate-950/20 text-slate-800 dark:text-slate-100',
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 max-w-md w-full bg-white dark:bg-slate-900 shadow-2xl rounded-xl p-4 border border-slate-100 dark:border-slate-800 flex items-center gap-3"
          style={{ backdropFilter: 'blur(8px)' }}
        >
          <div className={`p-1.5 rounded-lg border ${borderColors[type]}`}>
            {icons[type]}
          </div>
          <p className="text-sm font-medium text-slate-800 dark:text-slate-200 flex-1">{message}</p>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
