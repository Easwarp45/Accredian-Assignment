import React, { useState } from 'react';
import { Section } from '../components/layout/Section';
import { TESTIMONIALS } from '../constants/content';
import { TestimonialCard } from '../components/common/TestimonialCard';
import { Badge } from '../components/ui/Badge';

export const Testimonials: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Enterprise', 'Growth', 'Global'];

  const filteredTestimonials = selectedCategory === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === selectedCategory);

  return (
    <Section id="testimonials" bgColor="bg-slate-50" padding="py-20 md:py-28">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="blue" size="sm" className="mb-3">
          Customer Success
        </Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          What Enterprise Leaders Say
        </h2>
        <p className="text-slate-600 mt-4 text-lg">
          See how leading CTOs, VPs of L&D, and HR directors scale engineering capability with Accredian.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTestimonials.map((item) => (
          <TestimonialCard key={item.id} testimonial={item} />
        ))}
      </div>
    </Section>
  );
};
