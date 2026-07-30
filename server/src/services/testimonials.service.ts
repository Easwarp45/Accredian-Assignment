import { TestimonialModel } from '../models/Testimonial';
import { store } from './store.service';
import { getIsMongoConnected } from '../config/database';
import { ITestimonial } from '../types';
import { logger } from '../utils/logger';

export class TestimonialsService {
  async getTestimonials(): Promise<ITestimonial[]> {
    if (getIsMongoConnected()) {
      try {
        const docs = await TestimonialModel.find().lean();
        return docs as unknown as ITestimonial[];
      } catch (error: any) {
        logger.error(`Failed to retrieve testimonials from MongoDB (${error.message || error}). Falling back to in-memory store.`);
      }
    }
    return store.getTestimonials();
  }
}

export const testimonialsService = new TestimonialsService();
