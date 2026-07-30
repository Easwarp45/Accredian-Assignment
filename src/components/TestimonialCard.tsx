import React from 'react';
import { Testimonial } from '../types';
import { Card } from './ui/Card';
import { Star, Quote } from 'lucide-react';
import { Badge } from './ui/Badge';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card className="h-full flex flex-col justify-between border-l-4 border-l-blue-600 shadow-md hover:shadow-xl transition-all">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          {testimonial.metricHighlight && (
            <Badge variant="teal" size="sm">
              {testimonial.metricHighlight}
            </Badge>
          )}
        </div>

        <div className="relative mb-6">
          <Quote className="w-8 h-8 text-blue-100 absolute -top-2 -left-2 -z-0" />
          <p className="text-slate-700 italic relative z-10 text-base leading-relaxed">
            "{testimonial.quote}"
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
        <img
          src={testimonial.avatarUrl}
          alt={testimonial.author}
          className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 shadow-sm"
          referrerPolicy="no-referrer"
        />
        <div>
          <h4 className="font-bold text-slate-900 text-base">
            {testimonial.author}
          </h4>
          <p className="text-xs text-slate-500 font-medium">
            {testimonial.role}
          </p>
          <span className="inline-block mt-0.5 text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
            {testimonial.company}
          </span>
        </div>
      </div>
    </Card>
  );
};
