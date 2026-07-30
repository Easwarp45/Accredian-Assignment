import mongoose, { Schema, Document } from 'mongoose';
import { ITestimonial } from '../types';

export interface ITestimonialDocument extends ITestimonial, Document {}

const TestimonialSchema = new Schema<ITestimonialDocument>(
  {
    id: { type: String, required: true, unique: true },
    quote: { type: String, required: true },
    author: { type: String, required: true },
    role: { type: String, required: true },
    company: { type: String, required: true },
    avatarUrl: { type: String, required: true },
    rating: { type: Number, required: true },
    metricHighlight: { type: String },
    companyLogoText: { type: String, required: true },
    category: { type: String, required: true }
  },
  { timestamps: true }
);

export const TestimonialModel = mongoose.models.Testimonial || mongoose.model<ITestimonialDocument>('Testimonial', TestimonialSchema);
