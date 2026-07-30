import { Router } from 'express';
import { calculateROI } from '../controllers/roi.controller';
import { validateRequest } from '../middlewares/validate.middleware';
import { roiCalculatorSchema } from '../validators/roi.validator';

const router = Router();

router.post('/roi-calculate', validateRequest(roiCalculatorSchema), calculateROI);

export default router;
