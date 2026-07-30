import { Router } from 'express';
import { calculateROI } from '../controllers/roi.controller';

const router = Router();

router.post('/roi-calculate', calculateROI);

export default router;
