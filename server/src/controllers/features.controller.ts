import { Request, Response } from 'express';
import { featuresService } from '../services/features.service';
import { sendSuccess } from '../utils/apiResponse';
import { asyncHandler } from '../utils/asyncHandler';

export const getFeatures = asyncHandler(async (_req: Request, res: Response) => {
  const features = await featuresService.getAllFeatures();
  sendSuccess(res, 'Enterprise features retrieved successfully', features);
});
