import express from 'express';
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import { createServer as createViteServer } from 'vite';

import { config } from './server/src/config/env';
import { connectDatabase } from './server/src/config/database';
import apiRouter from './server/src/routes';
import { apiRateLimiter } from './server/src/middlewares/rateLimiter.middleware';
import { notFoundHandler } from './server/src/middlewares/notFound.middleware';
import { errorHandler } from './server/src/middlewares/error.middleware';
import { logger } from './server/src/utils/logger';

async function startServer() {
  const app = express();
  const PORT = config.port;

  // Trust first proxy (reverse proxy / Cloud Run)
  app.set('trust proxy', 1);

  // Initialize Database (MongoDB with graceful in-memory fallback)
  await connectDatabase();

  // Core Security & Utility Middlewares
  app.use(
    helmet({
      contentSecurityPolicy: false, // Disabled for Vite dev server HMR & external CDN assets
      crossOriginEmbedderPolicy: false
    })
  );
  app.use(cors());
  app.use(compression());
  app.use(morgan(config.nodeEnv === 'production' ? 'combined' : 'dev'));
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // Apply Rate Limiting to API endpoints
  app.use('/api', apiRateLimiter);

  // Mount Unified API Router
  app.use('/api', apiRouter);

  // Handle API 404s
  app.use('/api/*', notFoundHandler);

  // Global API Error Handler
  app.use(errorHandler);

  // Vite middleware for development vs Static file serving for production
  if (config.nodeEnv !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    logger.info(`Server running in ${config.nodeEnv} mode on http://localhost:${PORT}`);
  });
}

startServer();
