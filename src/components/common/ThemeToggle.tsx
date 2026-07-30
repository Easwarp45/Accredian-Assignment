import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Monitor, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../utils/cn';

export type Theme = 'light' | 'dark' | 'system';

interface ThemeToggleProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ currentTheme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themesList = [
    { id: 'light' as Theme, label: 'Light', icon: Sun },
    { id: 'dark' as Theme, label: 'Dark', icon: Moon },
    { id: 'system' as Theme, label: 'System', icon: Monitor },
  ];

  const CurrentIcon = themesList.find((t) => t.id === currentTheme)?.icon || Monitor;

  return (
    <div ref={dropdownRef} className="relative inline-block text-left z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme selection dropdown"
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-300 transition-all flex items-center justify-center cursor-pointer shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <CurrentIcon className="w-4 h-4 shrink-0 transition-transform duration-300 hover:rotate-12" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute right-0 mt-2 w-36 origin-top-right rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-1.5 shadow-xl ring-1 ring-black/5 focus:outline-none"
          >
            <div className="space-y-1">
              {themesList.map((theme) => {
                const IconComponent = theme.icon;
                const isSelected = currentTheme === theme.id;
                return (
                  <button
                    key={theme.id}
                    onClick={() => {
                      onThemeChange(theme.id);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer text-left",
                      isSelected
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400"
                        : "text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white dark:text-slate-300"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <IconComponent className="w-3.5 h-3.5" />
                      <span>{theme.label}</span>
                    </div>
                    {isSelected && <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
