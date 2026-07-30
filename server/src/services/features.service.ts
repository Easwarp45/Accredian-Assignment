import { FeatureModel } from '../models/Feature';
import { store } from './store.service';
import { getIsMongoConnected } from '../config/database';
import { IFeature } from '../types';

export class FeaturesService {
  async getAllFeatures(): Promise<IFeature[]> {
    if (getIsMongoConnected()) {
      const docs = await FeatureModel.find().lean();
      return docs as unknown as IFeature[];
    }
    return store.getFeatures();
  }
}

export const featuresService = new FeaturesService();
