import {
  IFeature,
  IProgram,
  IFAQItem,
  ITestimonial,
  IStatistic,
  IContactSubmission,
  IDemoRequest
} from '../types';
import {
  SEED_FEATURES,
  SEED_PROGRAMS,
  SEED_FAQS,
  SEED_TESTIMONIALS,
  SEED_STATISTICS
} from '../constants/seedData';
import { logger } from '../utils/logger';

class InMemoryStore {
  private features: IFeature[] = [...SEED_FEATURES];
  private programs: IProgram[] = [...SEED_PROGRAMS];
  private faqs: IFAQItem[] = [...SEED_FAQS];
  private testimonials: ITestimonial[] = [...SEED_TESTIMONIALS];
  private statistics: IStatistic[] = [...SEED_STATISTICS];
  private contactSubmissions: IContactSubmission[] = [];
  private demoRequests: IDemoRequest[] = [];

  constructor() {
    logger.info('InMemoryStore initialized with seed data');
  }

  // Features
  getFeatures(): IFeature[] {
    return this.features;
  }

  // Programs
  getPrograms(category?: string): IProgram[] {
    if (category && category !== 'all') {
      return this.programs.filter((p) => p.category === category);
    }
    return this.programs;
  }

  // FAQs
  getFAQs(query?: string): IFAQItem[] {
    if (query) {
      const q = query.toLowerCase();
      return this.faqs.filter(
        (f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
      );
    }
    return this.faqs;
  }

  // Testimonials
  getTestimonials(): ITestimonial[] {
    return this.testimonials;
  }

  // Statistics
  getStatistics(): IStatistic[] {
    return this.statistics;
  }

  // Contact Submissions
  addContactSubmission(data: Omit<IContactSubmission, 'id' | 'createdAt'>): IContactSubmission {
    const submission: IContactSubmission = {
      ...data,
      id: `SUB-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      createdAt: new Date().toISOString()
    };
    this.contactSubmissions.push(submission);
    logger.info(`New contact submission stored [${submission.id}] from ${submission.workEmail}`);
    return submission;
  }

  getContactSubmissions(): IContactSubmission[] {
    return this.contactSubmissions;
  }

  // Demo Requests
  addDemoRequest(data: Omit<IDemoRequest, 'id' | 'referenceId' | 'createdAt'>): IDemoRequest {
    const refNum = Math.floor(100000 + Math.random() * 900000);
    const demoReq: IDemoRequest = {
      ...data,
      id: `DEMO-${Date.now()}`,
      referenceId: `ACC-DEMO-${refNum}`,
      createdAt: new Date().toISOString()
    };
    this.demoRequests.push(demoReq);
    logger.info(`New demo request stored [${demoReq.referenceId}] for ${demoReq.fullName}`);
    return demoReq;
  }

  getDemoRequests(): IDemoRequest[] {
    return this.demoRequests;
  }
}

export const store = new InMemoryStore();
