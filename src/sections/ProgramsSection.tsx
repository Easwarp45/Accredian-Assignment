import React, { useState } from 'react';
import { Section } from '../components/layout/Section';
import { ENTERPRISE_PROGRAMS } from '../constants/content';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Program } from '../types';
import { Search, Clock, Users, Star, ArrowRight, BookOpen, Layers } from 'lucide-react';

interface ProgramsSectionProps {
  onSelectProgram: (program: Program) => void;
  onBookDemo: (programTitle: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onSelectProgram,
  onBookDemo
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Curricula' },
    { id: 'data-ai', label: 'Data & AI' },
    { id: 'cloud-devops', label: 'Cloud & DevOps' },
    { id: 'product-tech', label: 'Product & Tech' },
    { id: 'cybersecurity', label: 'Cybersecurity' }
  ];

  const filteredPrograms = ENTERPRISE_PROGRAMS.filter((program) => {
    const matchesCategory = selectedCategory === 'all' || program.category === selectedCategory;
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      program.skillsCovered.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <Section id="programs" bgColor="bg-slate-50 dark:bg-slate-900/40" padding="py-20 md:py-28">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Badge variant="blue" size="sm" className="mb-3">
          150+ Enterprise Cohorts
        </Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Enterprise Learning Programs
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-4 text-lg">
          Curated hands-on curricula taught by industry tech directors and designed for rapid skill acquisition.
        </p>
      </div>

      {/* Search & Category Filter Toolbar */}
      <div className="max-w-4xl mx-auto mb-12 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by skill (e.g., GenAI, Kubernetes, MLOps, Microservices)..."
            aria-label="Search learning programs by skill"
            className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm text-sm dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-350 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Program Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPrograms.map((program) => (
          <Card key={program.id} className="h-full flex flex-col justify-between group hover:border-blue-300 dark:hover:border-blue-800">
            <div>
              <div className="flex items-center justify-between mb-3">
                <Badge variant="blue" size="sm">
                  {program.categoryLabel}
                </Badge>
                <Badge variant="purple" size="sm">
                  {program.level}
                </Badge>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 min-h-[56px]">
                {program.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed line-clamp-3">
                {program.description}
              </p>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {program.skillsCovered.slice(0, 4).map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>{(program.enrolledCount / 1000).toFixed(1)}k Trained</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="primary"
                  size="sm"
                  fullWidth
                  onClick={() => onSelectProgram(program)}
                  icon={<BookOpen className="w-4 h-4" />}
                >
                  View Curriculum
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onBookDemo(program.title)}
                >
                  Demo
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredPrograms.length === 0 && (
        <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
          <Layers className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">No matching programs found</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Try adjusting your search terms or filter selection.</p>
          <Button variant="secondary" size="sm" className="mt-4" onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
            Reset Filters
          </Button>
        </div>
      )}
    </Section>
  );
};
