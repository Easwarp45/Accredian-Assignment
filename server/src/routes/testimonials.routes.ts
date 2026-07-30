import { Router } from 'express';
import { getTestimonials } from '../controllers/testimonials.controller';

const router = Router();

router.get('/testimonials', getTestimonials);

export default router;
