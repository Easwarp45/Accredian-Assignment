import React from 'react';
import { Feature } from '../types';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import {
  Users,
  TrendingUp,
  Zap,
  Target,
  Award,
  HeartHandshake,
  ArrowRight,
  Shield,
  Brain,
  Code
} from 'lucide-react';

interface FeatureCardProps {
  feature: Feature;
  onSelect?: (feature: Feature) => void;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, onSelect }) => {
  const renderIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-blue-600" };
    switch (iconName) {
      case 'Users': return <Users {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Target': return <Target {...props} />;
      case 'Award': return <Award {...props} />;
      case 'HeartHandshake': return <HeartHandshake {...props} />;
      case 'Shield': return <Shield {...props} />;
      case 'Brain': return <Brain {...props} />;
      default: return <Code {...props} />;
    }
  };

  return (
    <Card className="h-full flex flex-col justify-between group hover:border-blue-300">
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="p-3.5 rounded-xl bg-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 inline-flex items-center justify-center">
            {renderIcon(feature.icon)}
          </div>
          {feature.badge && (
            <Badge variant="blue" size="sm">
              {feature.badge}
            </Badge>
          )}
        </div>

        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          {feature.title}
        </h3>

        <p className="text-slate-600 mt-3 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>

      {feature.linkText && (
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-700">
          <button
            onClick={() => onSelect && onSelect(feature)}
            className="inline-flex items-center gap-2 hover:underline focus:outline-none"
          >
            <span>{feature.linkText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </Card>
  );
};
