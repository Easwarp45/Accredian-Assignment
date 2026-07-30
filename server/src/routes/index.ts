import { Router } from 'express';
import healthRoutes from './health.routes';
import featuresRoutes from './features.routes';
import programsRoutes from './programs.routes';
import testimonialsRoutes from './testimonials.routes';
import faqsRoutes from './faqs.routes';
import statisticsRoutes from './statistics.routes';
import contactRoutes from './contact.routes';
import demoRoutes from './demo.routes';
import roiRoutes from './roi.routes';

const apiRouter = Router();

apiRouter.use(healthRoutes);
apiRouter.use(featuresRoutes);
apiRouter.use(programsRoutes);
apiRouter.use(testimonialsRoutes);
apiRouter.use(faqsRoutes);
apiRouter.use(statisticsRoutes);
apiRouter.use(contactRoutes);
apiRouter.use(demoRoutes);
apiRouter.use(roiRoutes);

export default apiRouter;
