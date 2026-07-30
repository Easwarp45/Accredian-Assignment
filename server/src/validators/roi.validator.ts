import { z } from 'zod';

export const roiCalculatorSchema = z.object({
  teamSize: z.number().min(1, 'Team size must be at least 1').max(100000).default(100),
  avgSalary: z.number().min(1000, 'Average salary must be at least $1,000').max(10000000).default(100000),
  turnoverRate: z.number().min(0, 'Turnover rate cannot be negative').max(100, 'Turnover rate cannot exceed 100%').default(15)
});

export type ROICalculatorInput = z.infer<typeof roiCalculatorSchema>;
