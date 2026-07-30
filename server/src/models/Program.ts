import mongoose, { Schema, Document } from 'mongoose';
import { IProgram } from '../types';

export interface IProgramDocument extends IProgram, Document {}

const ProgramSchema = new Schema<IProgramDocument>(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    categoryLabel: { type: String, required: true },
    duration: { type: String, required: true },
    level: { type: String, required: true },
    description: { type: String, required: true },
    enrolledCount: { type: Number, required: true },
    rating: { type: Number, required: true },
    skillsCovered: [{ type: String }],
    modulesCount: { type: Number, required: true },
    highlights: [{ type: String }],
    iconName: { type: String, required: true },
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export const ProgramModel = mongoose.models.Program || mongoose.model<IProgramDocument>('Program', ProgramSchema);
