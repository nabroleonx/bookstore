import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import bookRouter from './book';
import swaggerDocs from '../utils/docs';

const router = Router();

router.use('/book', bookRouter);
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default router;
