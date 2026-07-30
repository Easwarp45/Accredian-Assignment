import { Request, Response } from 'express';
import { demoService } from '../services/demo.service';
import { sendSuccess } from '../utils/apiResponse';
import { asyncHandler } from '../utils/asyncHandler';

export const handleDemoRequestSubmit = asyncHandler(async (req: Request, res: Response) => {
  const demoRequest = await demoService.createDemoRequest(req.body);
  sendSuccess(res, 'Demo request received successfully', demoRequest, 201);
});

export const getDemoRequests = asyncHandler(async (_req: Request, res: Response) => {
  const demoRequests = await demoService.getAllDemoRequests();
  sendSuccess(res, 'Demo requests retrieved successfully', demoRequests);
});
