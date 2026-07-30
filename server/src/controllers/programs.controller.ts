import { Request, Response } from 'express';
import { programsService } from '../services/programs.service';
import { sendSuccess } from '../utils/apiResponse';
import { asyncHandler } from '../utils/asyncHandler';

export const getPrograms = asyncHandler(async (req: Request, res: Response) => {
  const category = req.query.category as string;
  const programs = await programsService.getPrograms(category);
  sendSuccess(res, 'Enterprise programs retrieved successfully', programs, 200, {
    count: programs.length,
    filteredCategory: category || 'all'
  });
});
