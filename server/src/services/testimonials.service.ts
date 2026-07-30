import { TestimonialModel } from '../models/Testimonial';
import { store } from './store.service';
import { getIsMongoConnected } from '../config/database';
import { ITestimonial } from '../types';

export class TestimonialsService {
  async getTestimonials(): Promise<ITestimonial[]> {
    if (getIsMongoConnected()) {
      const docs = await TestimonialModel.find().lean();
      return docs as unknown as ITestimonial[];
    }
    return store.getTestimonials();
  }
}

export const testimonialsService = new TestimonialsService();
