import { Router } from 'express';
import userRoutes from './userRoutes.js';
import alimentoRoutes from './alimentoRoutes.js';
import recetaRoutes from './recetaRoutes.js';

const router = Router();

router.use('/user', userRoutes);
router.use('/alimento', alimentoRoutes);
router.use('/receta', recetaRoutes);

export default router;
