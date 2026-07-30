import mongoose, { Schema, Document } from 'mongoose';
import { IFAQItem } from '../types';

export interface IFAQDocument extends IFAQItem, Document {}

const FAQSchema = new Schema<IFAQDocument>(
  {
    id: { type: String, required: true, unique: true },
    question: { type: String, required: true },
    answer: { type: String, required: true },
    category: { type: String, required: true }
  },
  { timestamps: true }
);

export const FAQModel = mongoose.models.FAQ || mongoose.model<IFAQDocument>('FAQ', FAQSchema);
