import React, { useState } from 'react';
import { Section } from '../components/ui/Section';
import { FAQ_ITEMS } from '../constants/content';
import { AccordionItem } from '../components/AccordionItem';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Search, MessageSquare, PhoneCall } from 'lucide-react';

interface FAQSectionProps {
  onBookDemo: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onBookDemo }) => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Programs', 'Onboarding', 'Pricing & ROI', 'Certifications', 'Enterprise Support'];

  const filteredItems = FAQ_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Section id="faq" bgColor="bg-white" padding="py-20 md:py-28">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="blue" size="sm" className="mb-3">
          Got Questions?
        </Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-600 mt-4 text-lg">
          Everything you need to know about Accredian enterprise licensing, onboarding, and customized curricula.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mt-8">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g., pricing, SSO, certifications)..."
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {filteredItems.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => handleToggle(item.id)}
          />
        ))}

        {filteredItems.length === 0 && (
          <p className="text-center text-slate-500 py-8 text-sm">
            No matching questions found. Feel free to contact our enterprise advisors directly!
          </p>
        )}
      </div>

      {/* Still Have Questions Box */}
      <div className="max-w-3xl mx-auto mt-12 bg-blue-50 p-6 sm:p-8 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-left">
          <div className="p-3 bg-blue-600 text-white rounded-xl shadow-md shrink-0">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-lg">Still have unanswered questions?</h4>
            <p className="text-sm text-slate-600 mt-0.5">
              Speak directly with an Accredian Enterprise Director today.
            </p>
          </div>
        </div>

        <Button variant="primary" size="md" onClick={onBookDemo} icon={<PhoneCall className="w-4 h-4" />}>
          Schedule Call
        </Button>
      </div>
    </Section>
  );
};
