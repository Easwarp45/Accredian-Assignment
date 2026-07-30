import express from 'express';
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import { createServer as createViteServer } from 'vite';

import { config } from './config/env';
import apiRouter from './routes';
import { apiRateLimiter } from './middlewares/rateLimiter.middleware';
import { notFoundHandler } from './middlewares/notFound.middleware';
import { errorHandler } from './middlewares/error.middleware';
import { connectDatabase } from './config/database';

const app = express();

// Initialize Database connection (async bootstrap for serverless environments)
connectDatabase();

// Disable fingerprinting header
app.disable('x-powered-by');

// Trust first proxy (reverse proxy / Cloud Run / Nginx)
app.set('trust proxy', 1);

// Dynamic script security for CSP
const scriptDirectives = config.nodeEnv === 'production'
  ? ["'self'", "'unsafe-inline'"] // Omit 'unsafe-eval' in production for standard strict compliance
  : ["'self'", "'unsafe-inline'", "'unsafe-eval'"]; // Dev server HMR needs unsafe-eval

// Core Security & Utility Middlewares
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", ...scriptDirectives],
        styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        imgSrc: ["'self'", "data:", "https:"],
        connectSrc: ["'self'", "ws:", "wss:"]
      }
    },
    crossOriginEmbedderPolicy: false,
    referrerPolicy: { policy: 'strict-origin-when-cross-origin' }
  })
);

// Configure CORS options
const allowedOrigins = config.corsAllowedOrigins
  ? config.corsAllowedOrigins.split(',').map((o) => o.trim())
  : [config.appUrl];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, postman, or same-origin requests)
      if (!origin) return callback(null, true);
      
      // In non-production, allow localhost origins for dev ease
      if (config.nodeEnv !== 'production' && (origin.startsWith('http://localhost') || origin.startsWith('http://127.0.0.1'))) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
    credentials: true
  })
);

app.use(compression());
app.use(morgan(config.nodeEnv === 'production' ? 'combined' : 'dev'));
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));

// Apply Rate Limiting to API endpoints
app.use('/api', apiRateLimiter);

// Mount Unified API Router
app.use('/api', apiRouter);

// Handle API 404s
app.use('/api/*', notFoundHandler);

// Global API Error Handler
app.use(errorHandler);

// Setup Vite middleware for development vs static file serving for production
export async function setupFrontendMiddleware(expressApp: express.Express) {
  if (config.nodeEnv !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    expressApp.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    expressApp.use(express.static(distPath));
    expressApp.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }
}

export default app;
