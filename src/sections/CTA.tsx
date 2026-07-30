import React from 'react';
import { Button } from '../components/ui/Button';
import { ArrowRight, Sparkles, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface CTAProps {
  onBookDemo: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onBookDemo }) => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-900 text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-200 border border-white/20 mb-6"
        >
          <Sparkles className="w-4 h-4 text-cyan-300" />
          <span>Start Your Enterprise Transformation</span>
        </motion.div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
          Ready to Transform Your Enterprise Workforce?
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto font-normal leading-relaxed">
          Join 500+ leading global companies upskilling their teams in GenAI, Cloud Architecture, and Data Engineering with Accredian.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="white"
            size="lg"
            onClick={onBookDemo}
            icon={<ArrowRight className="w-5 h-5 text-blue-600" />}
          >
            Schedule a Demo Today
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-500/40 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-blue-200 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-cyan-300" />
            <span>2-Week Express Onboarding</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-300" />
            <span>SOC2 Type II Certified</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>Dedicated Success Manager</span>
          </div>
        </div>
      </div>
    </section>
  );
};
