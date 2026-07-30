import dotenv from 'dotenv';
dotenv.config();

const DEFAULT_ATLAS_URI = 'mongodb+srv://easwarp45_db_user:6AHeK1yYcQ0KiIAp@cluster0.1m8rwxr.mongodb.net/accredian_enterprise?appName=Cluster0';

function getSanitizedMongoUri(uri?: string): string {
  if (!uri || uri.includes('<') || uri.includes('>')) {
    return DEFAULT_ATLAS_URI;
  }
  return uri;
}

export const config = {
  port: parseInt(process.env.PORT || '3000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoUri: getSanitizedMongoUri(process.env.MONGODB_URI),
  appUrl: process.env.APP_URL || 'http://0.0.0.0:3000',
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 200 // limit each IP to 200 requests per windowMs
  }
};
