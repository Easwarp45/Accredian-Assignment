import React, { useState, useEffect, useRef } from 'react';
import { Statistic } from '../../types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { TrendingUp } from 'lucide-react';

interface StatisticCardProps {
  statistic: Statistic;
}

export const StatisticCard: React.FC<StatisticCardProps> = ({ statistic }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000; // 2s duration
          const steps = 50;
          const stepValue = statistic.value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += stepValue;
            if (current >= statistic.value) {
              setCount(statistic.value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [statistic.value, hasAnimated]);

  return (
    <div ref={cardRef}>
      <Card className="h-full border border-slate-100 flex flex-col justify-between hover:border-blue-200 transition-all">
        <div>
          <div className="flex items-center justify-between mb-4">
            {statistic.changeBadge && (
              <Badge variant="blue" icon={<TrendingUp className="w-3 h-3" />}>
                {statistic.changeBadge}
              </Badge>
            )}
          </div>

          <div className="flex items-baseline gap-1 text-4xl lg:text-5xl font-extrabold text-blue-600 tracking-tight">
            {statistic.prefix && <span>{statistic.prefix}</span>}
            <span>{count.toLocaleString()}</span>
            <span>{statistic.suffix}</span>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mt-3">
            {statistic.label}
          </h3>

          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            {statistic.description}
          </p>
        </div>
      </Card>
    </div>
  );
};
