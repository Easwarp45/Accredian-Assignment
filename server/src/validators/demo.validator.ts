import { z } from 'zod';

export const demoRequestSchema = z.object({
  fullName: z.string().min(2, 'Full Name must be at least 2 characters long').max(100),
  workEmail: z.string().email('Please enter a valid work email address'),
  companyName: z.string().min(2, 'Company Name is required'),
  phone: z.string().min(6, 'Please enter a valid phone number'),
  designation: z.string().optional(),
  organizationSize: z.string().optional(),
  teamSize: z.string().optional(),
  interestedProgram: z.string().optional(),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().optional()
});

export type DemoRequestInput = z.infer<typeof demoRequestSchema>;
