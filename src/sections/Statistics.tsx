import React from 'react';
import { Section } from '../components/ui/Section';
import { IMPACT_STATISTICS } from '../constants/content';
import { StatisticCard } from '../components/StatisticCard';
import { Badge } from '../components/ui/Badge';

export const Statistics: React.FC = () => {
  return (
    <section id="statistics" className="bg-[#111827] text-white py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="blue" size="sm" className="mb-3 bg-blue-500/20 text-blue-300 border border-blue-500/30">
            Proven Industry Benchmarks
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Quantifiable Enterprise Impact
          </h2>
          <p className="text-gray-400 mt-4 text-base sm:text-lg">
            We combine rigorous curriculum design with continuous learning analytics to drive completion and skill application rates.
          </p>
        </div>

        {/* Impact Statistics Grid / Banner */}
        <div className="bg-slate-900/60 rounded-2xl border border-gray-800 p-8 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 items-center justify-around divide-y sm:divide-y-0 lg:divide-x divide-gray-800">
            {IMPACT_STATISTICS.map((stat) => (
              <div key={stat.id} className="text-center px-4 pt-4 sm:pt-0">
                <h3 className="text-4xl lg:text-5xl font-bold text-blue-400">
                  {stat.prefix}{stat.value.toLocaleString()}{stat.suffix}
                </h3>
                <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mt-2">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
