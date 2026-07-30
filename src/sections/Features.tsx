import React, { useState } from 'react';
import { Section } from '../components/ui/Section';
import { ENTERPRISE_FEATURES } from '../constants/content';
import { FeatureCard } from '../components/FeatureCard';
import { Feature } from '../types';
import { Badge } from '../components/ui/Badge';

interface FeaturesProps {
  onSelectFeature?: (feature: Feature) => void;
}

export const Features: React.FC<FeaturesProps> = ({ onSelectFeature }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'admin' | 'employee' | 'leadership'>('all');

  const filteredFeatures = activeTab === 'all'
    ? ENTERPRISE_FEATURES
    : ENTERPRISE_FEATURES.filter(f => f.category === activeTab);

  return (
    <Section id="benefits" bgColor="bg-white" padding="py-20 md:py-28">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="blue" size="sm" className="mb-3">
          Built for Enterprise Excellence
        </Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Enterprise Benefits Designed for Impact
        </h2>
        <p className="text-slate-600 mt-4 text-lg">
          Accredian bridges the gap between organizational tech roadmaps and workforce capability through automated learning pathways.
        </p>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {[
            { id: 'all', label: 'All Benefits' },
            { id: 'admin', label: 'For L&D Administrators' },
            { id: 'employee', label: 'For Employees & Tech Teams' },
            { id: 'leadership', label: 'For Executive Leadership' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFeatures.map((feature) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
            onSelect={onSelectFeature}
          />
        ))}
      </div>
    </Section>
  );
};
