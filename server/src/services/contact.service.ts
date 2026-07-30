import { ContactSubmissionModel } from '../models/ContactSubmission';
import { store } from './store.service';
import { getIsMongoConnected } from '../config/database';
import { ContactInput } from '../validators/contact.validator';
import { IContactSubmission } from '../types';

export class ContactService {
  async createContactSubmission(input: ContactInput): Promise<IContactSubmission> {
    const createdAt = new Date().toISOString();
    const id = `SUB-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    if (getIsMongoConnected()) {
      const doc = await ContactSubmissionModel.create({
        ...input,
        id,
        createdAt
      });
      return doc.toObject() as IContactSubmission;
    }

    return store.addContactSubmission(input);
  }

  async getAllSubmissions(): Promise<IContactSubmission[]> {
    if (getIsMongoConnected()) {
      const docs = await ContactSubmissionModel.find().sort({ createdAt: -1 }).lean();
      return docs as unknown as IContactSubmission[];
    }
    return store.getContactSubmissions();
  }
}

export const contactService = new ContactService();
