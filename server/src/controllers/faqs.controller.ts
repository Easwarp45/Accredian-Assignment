import { Request, Response } from 'express';
import { faqsService } from '../services/faqs.service';
import { sendSuccess } from '../utils/apiResponse';
import { asyncHandler } from '../utils/asyncHandler';

export const getFAQs = asyncHandler(async (req: Request, res: Response) => {
  const query = req.query.q as string;
  const faqs = await faqsService.getFAQs(query);
  sendSuccess(res, 'FAQs retrieved successfully', faqs, 200, {
    count: faqs.length,
    searchQuery: query || null
  });
});
