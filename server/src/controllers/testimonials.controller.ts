import { Request, Response } from 'express';
import { testimonialsService } from '../services/testimonials.service';
import { sendSuccess } from '../utils/apiResponse';
import { asyncHandler } from '../utils/asyncHandler';

export const getTestimonials = asyncHandler(async (_req: Request, res: Response) => {
  const testimonials = await testimonialsService.getTestimonials();
  sendSuccess(res, 'Testimonials retrieved successfully', testimonials);
});
