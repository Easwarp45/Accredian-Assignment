import { FeatureModel } from '../models/Feature';
import { ProgramModel } from '../models/Program';
import { FAQModel } from '../models/FAQ';
import { TestimonialModel } from '../models/Testimonial';
import { StatisticModel } from '../models/Statistic';
import {
  SEED_FEATURES,
  SEED_PROGRAMS,
  SEED_FAQS,
  SEED_TESTIMONIALS,
  SEED_STATISTICS
} from '../constants/seedData';
import { logger } from '../utils/logger';

export async function seedDatabase(): Promise<void> {
  try {
    const featureCount = await FeatureModel.countDocuments();
    if (featureCount === 0) {
      await FeatureModel.insertMany(SEED_FEATURES as any);
      logger.info('Seeded Features collection successfully');
    }

    const programCount = await ProgramModel.countDocuments();
    if (programCount === 0) {
      await ProgramModel.insertMany(SEED_PROGRAMS as any);
      logger.info('Seeded Programs collection successfully');
    }

    const faqCount = await FAQModel.countDocuments();
    if (faqCount === 0) {
      await FAQModel.insertMany(SEED_FAQS as any);
      logger.info('Seeded FAQs collection successfully');
    }

    const testimonialCount = await TestimonialModel.countDocuments();
    if (testimonialCount === 0) {
      await TestimonialModel.insertMany(SEED_TESTIMONIALS as any);
      logger.info('Seeded Testimonials collection successfully');
    }

    const statisticCount = await StatisticModel.countDocuments();
    if (statisticCount === 0) {
      await StatisticModel.insertMany(SEED_STATISTICS as any);
      logger.info('Seeded Statistics collection successfully');
    }
  } catch (error) {
    logger.warn('Seed execution notice:', error);
  }
}
