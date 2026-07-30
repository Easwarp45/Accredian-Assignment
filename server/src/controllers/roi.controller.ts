import { Request, Response } from 'express';
import { sendSuccess } from '../utils/apiResponse';
import { asyncHandler } from '../utils/asyncHandler';

export const calculateROI = asyncHandler(async (req: Request, res: Response) => {
  const { teamSize = 100, avgSalary = 100000, turnoverRate = 15 } = req.body;

  const numTeam = Number(teamSize) || 100;
  const numSalary = Number(avgSalary) || 100000;
  const numTurnover = Number(turnoverRate) || 15;

  const productivityGain = Math.round(numTeam * numSalary * 0.18);
  const turnoverSavings = Math.round(numTeam * (numTurnover / 100) * 0.40 * numSalary * 0.5);
  const totalBenefit = productivityGain + turnoverSavings;
  const estimatedInvestment = Math.round(numTeam * 850);
  const netROI = Math.round(((totalBenefit - estimatedInvestment) / estimatedInvestment) * 100);
  const paybackPeriodMonths = parseFloat(((estimatedInvestment / totalBenefit) * 12).toFixed(1));

  sendSuccess(res, 'ROI calculation completed successfully', {
    productivityGain,
    turnoverSavings,
    totalBenefit,
    estimatedInvestment,
    netROI,
    paybackPeriodMonths
  });
});
