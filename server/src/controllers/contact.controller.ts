import { Request, Response } from 'express';
import { contactService } from '../services/contact.service';
import { sendSuccess } from '../utils/apiResponse';
import { asyncHandler } from '../utils/asyncHandler';

export const handleContactSubmit = asyncHandler(async (req: Request, res: Response) => {
  const submission = await contactService.createContactSubmission(req.body);
  sendSuccess(res, 'Contact message logged successfully', submission, 201);
});

export const getContactSubmissions = asyncHandler(async (_req: Request, res: Response) => {
  const submissions = await contactService.getAllSubmissions();
  sendSuccess(res, 'Contact submissions retrieved successfully', submissions);
});
