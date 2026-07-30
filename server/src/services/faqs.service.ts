import { FAQModel } from '../models/FAQ';
import { store } from './store.service';
import { getIsMongoConnected } from '../config/database';
import { IFAQItem } from '../types';
import { logger } from '../utils/logger';

export class FAQsService {
  async getFAQs(query?: string): Promise<IFAQItem[]> {
    if (getIsMongoConnected()) {
      try {
        const filter: Record<string, any> = {};
        if (query && typeof query === 'string') {
          const sanitizedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          filter.$or = [
            { question: { $regex: sanitizedQuery, $options: 'i' } },
            { answer: { $regex: sanitizedQuery, $options: 'i' } }
          ];
        }
        const docs = await FAQModel.find(filter as any).lean();
        return docs as unknown as IFAQItem[];
      } catch (error: any) {
        logger.error(`Failed to retrieve FAQs from MongoDB (${error.message || error}). Falling back to in-memory store.`);
      }
    }
    return store.getFAQs(query);
  }
}

export const faqsService = new FAQsService();
