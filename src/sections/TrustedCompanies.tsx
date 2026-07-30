import React, { useState } from 'react';
import { Section } from '../components/ui/Section';
import { TRUSTED_COMPANIES } from '../constants/content';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Building2, Quote } from 'lucide-react';

export const TrustedCompanies: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeQuoteCompany, setActiveQuoteCompany] = useState<string>(TRUSTED_COMPANIES[0].id);

  const categories = ['All', 'Tech', 'Consulting', 'Global'];

  const filteredCompanies = selectedCategory === 'All'
    ? TRUSTED_COMPANIES
    : TRUSTED_COMPANIES.filter(c => c.category === selectedCategory);

  const activeCompany = TRUSTED_COMPANIES.find(c => c.id === activeQuoteCompany) || TRUSTED_COMPANIES[0];

  return (
    <Section id="trusted-companies" bgColor="bg-slate-50" padding="py-16">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Badge variant="blue" size="sm" className="mb-3">
          Global Enterprise Partners
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Trusted by Leading Enterprises Worldwide
        </h2>
        <p className="text-slate-600 mt-2 text-base">
          Over 500 Fortune 500 companies rely on Accredian to upskill their global engineering and leadership teams.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
        {filteredCompanies.map((company) => (
          <button
            key={company.id}
            onClick={() => setActiveQuoteCompany(company.id)}
            className="text-left focus:outline-none w-full"
          >
            <Card
              padding="sm"
              className={`h-28 flex flex-col items-center justify-center transition-all cursor-pointer text-center ${
                activeQuoteCompany === company.id
                  ? 'border-2 border-blue-600 shadow-lg bg-blue-50/30'
                  : 'hover:border-slate-300 hover:shadow-md grayscale hover:grayscale-0'
              }`}
            >
              <div className="flex items-center gap-2 font-extrabold text-slate-800 text-xl tracking-tight">
                <Building2 className="w-5 h-5 text-blue-600" />
                <span>{company.logoText}</span>
              </div>
              <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-1.5">
                {company.industry}
              </span>
            </Card>
          </button>
        ))}
      </div>

      {/* Dynamic Enterprise Spotlight Quote */}
      {activeCompany && (
        <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-2xl border border-slate-200 shadow-md flex items-start gap-4">
          <div className="p-3 bg-blue-50 rounded-xl text-blue-600 shrink-0">
            <Quote className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-bold text-slate-900 text-sm">{activeCompany.name} Case Highlight</span>
              <Badge variant="teal" size="sm">{activeCompany.stats}</Badge>
            </div>
            <p className="text-slate-700 italic text-sm sm:text-base leading-relaxed">
              "{activeCompany.quote}"
            </p>
          </div>
        </div>
      )}
    </Section>
  );
};
