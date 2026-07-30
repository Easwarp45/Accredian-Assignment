import React from 'react';
import { Section } from '../components/layout/Section';
import { ROICalculator } from '../components/common/ROICalculator';
import { Badge } from '../components/ui/Badge';

interface ROICalculatorSectionProps {
  onBookDemo: () => void;
  onDownloadReportSuccess: (message: string) => void;
}

export const ROICalculatorSection: React.FC<ROICalculatorSectionProps> = ({
  onBookDemo,
  onDownloadReportSuccess
}) => {
  return (
    <Section id="calculator" bgColor="bg-white dark:bg-slate-950" padding="py-20 md:py-28">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge variant="blue" size="sm" className="mb-3">
          Quantifiable Business Impact
        </Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Estimate Your Enterprise Training ROI
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-4 text-lg">
          Adjust workforce size, salary baselines, and retention targets to calculate projected productivity gains and payback timelines.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <ROICalculator
          onBookDemo={onBookDemo}
          onDownloadReportSuccess={onDownloadReportSuccess}
        />
      </div>
    </Section>
  );
};
