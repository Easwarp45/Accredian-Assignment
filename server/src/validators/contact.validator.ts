import { z } from 'zod';

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, 'Full Name must be at least 2 characters long').max(100, 'Full Name must be at most 100 characters'),
  workEmail: z.string().trim().email('Please enter a valid work email address').max(255),
  companyName: z.string().trim().min(2, 'Company Name is required').max(150),
  phone: z.string().trim().min(6, 'Please enter a valid phone number').max(30),
  teamSize: z.string().trim().max(50).optional(),
  interestedProgram: z.string().trim().max(150).optional(),
  message: z.string().trim().max(2000).optional()
}).strict();

export type ContactInput = z.infer<typeof contactSchema>;
