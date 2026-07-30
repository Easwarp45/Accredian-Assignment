import { Request, Response } from 'express';
import { statisticsService } from '../services/statistics.service';
import { sendSuccess } from '../utils/apiResponse';
import { asyncHandler } from '../utils/asyncHandler';

export const getStatistics = asyncHandler(async (_req: Request, res: Response) => {
  const statistics = await statisticsService.getStatistics();
  sendSuccess(res, 'Impact statistics retrieved successfully', statistics);
});
