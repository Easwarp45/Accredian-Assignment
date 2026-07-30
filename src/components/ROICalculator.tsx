import React, { useState, useMemo } from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Calculator, DollarSign, TrendingUp, Users, ShieldCheck, ArrowRight } from 'lucide-react';

interface ROICalculatorProps {
  onBookDemo: () => void;
  onDownloadReportSuccess: (message: string) => void;
}

export const ROICalculator: React.FC<ROICalculatorProps> = ({
  onBookDemo,
  onDownloadReportSuccess
}) => {
  const [teamSize, setTeamSize] = useState<number>(150);
  const [avgSalary, setAvgSalary] = useState<number>(110000);
  const [turnoverRate, setTurnoverRate] = useState<number>(18);

  const calculations = useMemo(() => {
    // 18% productivity increase per upskilled employee
    const productivityGain = Math.round(teamSize * avgSalary * 0.18);
    // 40% reduction in turnover costs (replacing a developer costs ~1.5x salary)
    const turnoverSavings = Math.round(teamSize * (turnoverRate / 100) * 0.40 * avgSalary * 0.5);
    const totalBenefit = productivityGain + turnoverSavings;
    const estimatedInvestment = Math.round(teamSize * 850); // $850 per employee avg
    const netROI = Math.round(((totalBenefit - estimatedInvestment) / estimatedInvestment) * 100);
    const paybackMonths = Math.max(1.2, parseFloat(((estimatedInvestment / totalBenefit) * 12).toFixed(1)));

    return {
      productivityGain,
      turnoverSavings,
      totalBenefit,
      estimatedInvestment,
      netROI,
      paybackMonths
    };
  }, [teamSize, avgSalary, turnoverRate]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleDownloadReport = () => {
    onDownloadReportSuccess(`Enterprise ROI report generated for ${teamSize} employees! Est. Financial Impact: ${formatCurrency(calculations.totalBenefit)}.`);
  };

  return (
    <Card padding="xl" className="border-2 border-blue-100 shadow-xl bg-gradient-to-br from-white via-blue-50/20 to-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-600 text-white rounded-xl shadow-md">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <Badge variant="blue" size="sm">
            Interactive Enterprise Tool
          </Badge>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">
            Enterprise Workforce ROI Calculator
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders Input Area */}
        <div className="lg:col-span-7 space-y-6">
          {/* Team Size */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span>Team / Workforce Size</span>
              </label>
              <span className="text-base font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                {teamSize.toLocaleString()} employees
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="2000"
              step="10"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
              <span>10 learners</span>
              <span>500 learners</span>
              <span>2,000 learners</span>
            </div>
          </div>

          {/* Average Salary */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-blue-600" />
                <span>Average Employee Annual Salary</span>
              </label>
              <span className="text-base font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                {formatCurrency(avgSalary)}
              </span>
            </div>
            <input
              type="range"
              min="50000"
              max="220000"
              step="5000"
              value={avgSalary}
              onChange={(e) => setAvgSalary(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
              <span>$50,000</span>
              <span>$120,000</span>
              <span>$220,000</span>
            </div>
          </div>

          {/* Turnover Rate */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span>Estimated Annual Turnover Rate</span>
              </label>
              <span className="text-base font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                {turnoverRate}%
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="35"
              step="1"
              value={turnoverRate}
              onChange={(e) => setTurnoverRate(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
              <span>5% (Low)</span>
              <span>18% (Avg)</span>
              <span>35% (High)</span>
            </div>
          </div>
        </div>

        {/* Calculated Results Summary Box */}
        <div className="lg:col-span-5 bg-slate-900 text-white p-6 rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl" />

          <p className="text-xs uppercase font-bold tracking-widest text-blue-400 mb-1">
            Total Annual Financial Impact
          </p>

          <div className="text-4xl sm:text-5xl font-black text-white tracking-tight my-2">
            {formatCurrency(calculations.totalBenefit)}
          </div>

          <div className="flex items-center gap-2 my-4">
            <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-500/30">
              +{calculations.netROI}% Net ROI
            </span>
            <span className="bg-blue-500/20 text-blue-300 text-xs font-bold px-2.5 py-1 rounded-full border border-blue-500/30">
              {calculations.paybackMonths} Mo. Payback
            </span>
          </div>

          <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-300">
            <div className="flex justify-between">
              <span>Productivity Efficiency Gains:</span>
              <span className="font-bold text-white">{formatCurrency(calculations.productivityGain)}</span>
            </div>
            <div className="flex justify-between">
              <span>Attrition / Retention Savings:</span>
              <span className="font-bold text-white">{formatCurrency(calculations.turnoverSavings)}</span>
            </div>
            <div className="flex justify-between text-slate-400 pt-1 border-t border-slate-800/60">
              <span>Est. Accredian Investment:</span>
              <span>{formatCurrency(calculations.estimatedInvestment)}</span>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={onBookDemo}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request Custom Executive Proposal
            </Button>

            <button
              onClick={handleDownloadReport}
              className="w-full text-center text-xs font-semibold text-slate-400 hover:text-white py-2 transition-colors inline-flex items-center justify-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Export Calculation Summary (PDF)</span>
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};
