import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Play, Award, BarChart2 } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onBookDemo: () => void;
  onExplorePrograms: () => void;
  onCalculateROI: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBookDemo,
  onExplorePrograms,
  onCalculateROI
}) => {
  const [activeTab, setActiveTab] = useState<'ai' | 'cloud' | 'data'>('ai');

  const tabCapabilities = {
    ai: [
      { name: 'Generative AI & Agentic Systems', score: 96, growth: '+42%' },
      { name: 'LLM Fine-tuning & MLOps', score: 92, growth: '+38%' },
      { name: 'AI Ethics & Risk Governance', score: 98, growth: '+50%' },
    ],
    cloud: [
      { name: 'Multi-Cloud Architecture (AWS/GCP)', score: 95, growth: '+35%' },
      { name: 'Kubernetes & Infrastructure as Code', score: 91, growth: '+40%' },
      { name: 'Zero-Trust DevSecOps', score: 94, growth: '+45%' },
    ],
    data: [
      { name: 'Predictive Data Pipelines', score: 94, growth: '+36%' },
      { name: 'Real-Time Streaming Analytics', score: 90, growth: '+32%' },
      { name: 'Enterprise Data Governance', score: 97, growth: '+48%' },
    ]
  };

  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-16 md:pb-28 bg-gradient-to-br from-white via-blue-50/20 to-blue-50/40 overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute -top-12 -left-12 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2"
            >
              <Badge variant="blue" icon={<Sparkles className="w-3.5 h-3.5 text-blue-600" />}>
                #1 Enterprise Workforce Upskilling Platform
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] font-bold text-[#111827] tracking-tight"
            >
              Upskill Your <span className="text-blue-600">Enterprise</span> with Accredian
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-xl leading-relaxed"
            >
              Provide cutting-edge learning programs to your teams. Empower your workforce with industry-relevant skills trusted by 500K+ professionals globally.
            </motion.p>

            {/* Value Bullet Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm font-medium text-slate-700"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Custom Curricula Aligned to Tech Stack</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>98% Course Completion Standard</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Real-Time Executive Analytics Dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Rapid 2-Week Launch with SSO</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <button
                onClick={onBookDemo}
                className="bg-[#2563EB] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:bg-[#1D4ED8] transition-all shadow-md active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onExplorePrograms}
                className="flex items-center justify-center gap-2 text-blue-600 font-bold text-lg px-6 py-4 hover:bg-blue-50 rounded-xl transition-all cursor-pointer"
              >
                <span>View Programs</span>
                <span>→</span>
              </button>
            </motion.div>

            {/* Trust Pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-4 flex items-center gap-3 text-xs text-slate-500 font-medium"
            >
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Learner" referrerPolicy="no-referrer" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Learner" referrerPolicy="no-referrer" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" alt="Learner" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="font-bold text-slate-900">4.9/5 Rating across 500+ Organizations</p>
                <p className="text-slate-500">Includes Google, Microsoft, Amazon, Deloitte & Infosys</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column Interactive Enterprise Skill Radar Mockup */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 relative"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-extrabold uppercase text-slate-700 tracking-wider">
                    Live Enterprise Skill Matrix
                  </span>
                </div>
                <Badge variant="teal" size="sm">
                  SSO Connected
                </Badge>
              </div>

              {/* Interactive Tabs */}
              <div className="flex gap-1 p-1 bg-slate-100 rounded-lg my-4">
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-colors ${
                    activeTab === 'ai' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  AI & GenAI
                </button>
                <button
                  onClick={() => setActiveTab('cloud')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-colors ${
                    activeTab === 'cloud' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Cloud & DevSec
                </button>
                <button
                  onClick={() => setActiveTab('data')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-colors ${
                    activeTab === 'data' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Data Science
                </button>
              </div>

              {/* Capability Bars */}
              <div className="space-y-4 my-2">
                {tabCapabilities[activeTab].map((cap, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold text-slate-800">
                      <span>{cap.name}</span>
                      <span className="text-blue-600 font-bold">{cap.score}% Competency ({cap.growth})</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${cap.score}%` }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quick Callout */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 bg-blue-50/50 p-3 rounded-xl">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-slate-800">SOC2 Type II & GDPR Compliant</span>
                </div>
                <button
                  onClick={onExplorePrograms}
                  className="text-blue-600 font-bold hover:underline"
                >
                  View Catalog →
                </button>
              </div>

              {/* Floating Badge Accent */}
              <div className="absolute -bottom-4 -right-4 bg-slate-900 text-white p-3.5 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 hidden sm:flex">
                <div className="p-2 bg-blue-600 rounded-xl text-white">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold">100% Verifiable Credentials</p>
                  <p className="text-[10px] text-slate-400">LinkedIn & HRIS Integrated</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
