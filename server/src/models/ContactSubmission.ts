import mongoose, { Schema, Document } from 'mongoose';
import { IContactSubmission } from '../types';

export interface IContactSubmissionDocument extends IContactSubmission, Document {}

const ContactSubmissionSchema = new Schema<IContactSubmissionDocument>(
  {
    id: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    workEmail: { type: String, required: true },
    companyName: { type: String, required: true },
    phone: { type: String, required: true },
    teamSize: { type: String },
    interestedProgram: { type: String },
    message: { type: String },
    createdAt: { type: String, required: true }
  },
  { timestamps: true }
);

export const ContactSubmissionModel = mongoose.models.ContactSubmission || mongoose.model<IContactSubmissionDocument>('ContactSubmission', ContactSubmissionSchema);
