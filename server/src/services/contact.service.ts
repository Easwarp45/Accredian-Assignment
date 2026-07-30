import { ContactSubmissionModel } from '../models/ContactSubmission';
import { store } from './store.service';
import { getIsMongoConnected } from '../config/database';
import { ContactInput } from '../validators/contact.validator';
import { IContactSubmission } from '../types';
import { logger } from '../utils/logger';

export class ContactService {
  async createContactSubmission(input: ContactInput): Promise<IContactSubmission> {
    const createdAt = new Date().toISOString();
    const id = `SUB-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    if (getIsMongoConnected()) {
      try {
        const doc = await ContactSubmissionModel.create({
          ...input,
          id,
          createdAt
        });
        return doc.toObject() as IContactSubmission;
      } catch (error: any) {
        logger.error(`Failed to save contact submission to MongoDB (${error.message || error}). Falling back to in-memory store.`);
      }
    }

    return store.addContactSubmission(input);
  }

  async getAllSubmissions(): Promise<IContactSubmission[]> {
    if (getIsMongoConnected()) {
      try {
        const docs = await ContactSubmissionModel.find().sort({ createdAt: -1 }).lean();
        return docs as unknown as IContactSubmission[];
      } catch (error: any) {
        logger.error(`Failed to retrieve contact submissions from MongoDB (${error.message || error}). Falling back to in-memory store.`);
      }
    }
    return store.getContactSubmissions();
  }
}

export const contactService = new ContactService();
