import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { Menu, X, GraduationCap, ChevronRight, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onBookDemo: () => void;
  onSelectSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onBookDemo,
  onSelectSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section highlight tracking
      const sections = ['home', 'benefits', 'programs', 'calculator', 'statistics', 'testimonials', 'faq'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'benefits', label: 'Enterprise Benefits' },
    { id: 'programs', label: 'Programs' },
    { id: 'calculator', label: 'ROI Calculator' },
    { id: 'testimonials', label: 'Success Stories' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onSelectSection(id);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-gray-200 dark:border-slate-900 shadow-sm py-2.5'
          : 'bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-900 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-12">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 focus:outline-none group text-left"
        >
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl italic shadow-sm group-hover:bg-[#1D4ED8] transition-colors">
            A
          </div>
          <div>
            <span className="text-2xl font-bold tracking-tight text-[#001F3F] dark:text-white block leading-none">
              Accredian
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                activeSection === link.id
                  ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1 font-semibold'
                  : 'text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+18005550199"
            className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-900 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
            <span>Sales: +1 (800) 555-0199</span>
          </a>

          <button
            onClick={onBookDemo}
            className="bg-[#2563EB] text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-[#1D4ED8] transition-all shadow-md active:scale-95 cursor-pointer"
          >
            Book a Demo
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <Button variant="primary" size="sm" onClick={onBookDemo}>
            Demo
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 text-base font-semibold rounded-lg flex items-center justify-between ${
                    activeSection === link.id
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <Button variant="primary" size="lg" fullWidth onClick={() => { setMobileMenuOpen(false); onBookDemo(); }}>
                  Book a Personalized Demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
