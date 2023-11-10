import { Router } from 'express';
import roleRoutes from './roleRoutes.js';
import userRoutes from './userRoutes.js';
import alimentoRoutes from './alimentoRoutes.js';
import recetaRoutes from './recetaRoutes.js';

const router = Router();

router.use('/role', roleRoutes);
router.use('/user', userRoutes);
router.use('/alimento', alimentoRoutes);
router.use('/receta', recetaRoutes);

export default router;
