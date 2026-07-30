import { FAQModel } from '../models/FAQ';
import { store } from './store.service';
import { getIsMongoConnected } from '../config/database';
import { IFAQItem } from '../types';

export class FAQsService {
  async getFAQs(query?: string): Promise<IFAQItem[]> {
    if (getIsMongoConnected()) {
      const filter: Record<string, any> = {};
      if (query) {
        filter.$or = [
          { question: { $regex: query, $options: 'i' } },
          { answer: { $regex: query, $options: 'i' } }
        ];
      }
      const docs = await FAQModel.find(filter as any).lean();
      return docs as unknown as IFAQItem[];
    }
    return store.getFAQs(query);
  }
}

export const faqsService = new FAQsService();
