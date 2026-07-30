import React, { useState } from 'react';
import { GraduationCap, Linkedin, Twitter, Facebook, Instagram, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onSelectSection: (id: string) => void;
  onBookDemo: () => void;
  onToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectSection, onBookDemo, onToast }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/\S+@\S+\.\S+/.test(newsletterEmail)) {
      alert('Please enter a valid email address.');
      return;
    }
    setSubscribed(true);
    onToast(`Thank you! ${newsletterEmail} subscribed to Accredian Enterprise Insights.`);
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 pt-20 pb-12 border-t border-slate-800 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-extrabold shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Accredian
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering enterprise workforce transformation globally with accredited AI, Cloud, and Data programs.
            </p>
            <p className="text-[11px] text-slate-500 font-medium">
              ISO 27001 & SOC2 Type II Certified Platform.
            </p>
          </div>

          {/* Column 2: Product */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button onClick={() => onSelectSection('programs')} className="hover:text-blue-400 transition-colors">
                  Programs Catalog
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('benefits')} className="hover:text-blue-400 transition-colors">
                  Enterprise Benefits
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('calculator')} className="hover:text-blue-400 transition-colors">
                  Workforce ROI Calculator
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('statistics')} className="hover:text-blue-400 transition-colors">
                  Impact Benchmarks
                </button>
              </li>
              <li>
                <button onClick={onBookDemo} className="hover:text-blue-400 transition-colors">
                  Enterprise Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button onClick={() => onSelectSection('testimonials')} className="hover:text-blue-400 transition-colors">
                  Case Studies & ROI
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('faq')} className="hover:text-blue-400 transition-colors">
                  Help & FAQ
                </button>
              </li>
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">
                  GenAI Strategy Whitepaper
                </a>
              </li>
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">
                  Enterprise Webinars
                </a>
              </li>
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">
                  LMS Integration Docs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">About Accredian</a></li>
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Leadership & Faculty</a></li>
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Careers (We're Hiring)</a></li>
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Contact Sales</a></li>
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Privacy & Terms</a></li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Enterprise Briefing</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get monthly insights on AI talent trends, L&D benchmarks, and tech skill roadmaps.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="executive@company.com"
                  aria-label="Newsletter email address"
                  className="w-full pl-9 pr-3 py-2 bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                {subscribed ? <CheckCircle2 className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                <span>{subscribed ? 'Subscribed' : 'Subscribe Free'}</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Accredian Enterprise Technologies Inc. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-800 dark:bg-slate-900 hover:text-white hover:bg-blue-600 transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-800 dark:bg-slate-900 hover:text-white hover:bg-blue-600 transition-all">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-800 dark:bg-slate-900 hover:text-white hover:bg-blue-600 transition-all">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-800 dark:bg-slate-900 hover:text-white hover:bg-blue-600 transition-all">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
