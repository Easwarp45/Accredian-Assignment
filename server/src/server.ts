import app, { setupFrontendMiddleware } from './app';
import { config } from './config/env';
import { connectDatabase } from './config/database';
import { logger } from './utils/logger';

async function startServer() {
  const PORT = config.port;

  // Initialize Database (MongoDB with graceful in-memory fallback)
  await connectDatabase();

  // Setup Frontend routing/Vite middleware
  await setupFrontendMiddleware(app);

  app.listen(PORT, '0.0.0.0', () => {
    logger.info(`Server running in ${config.nodeEnv} mode on http://localhost:${PORT}`);
  });
}

startServer();
