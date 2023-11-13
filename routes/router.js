import { Router } from 'express';
import userRoutes from './userRoutes.js';
import alimentoRoutes from './alimentoRoutes.js';
import recetaRoutes from './recetaRoutes.js';
import recetaAlimentoRoutes from './recetaAlimentoRoutes.js';

const router = Router();

router.use('/user', userRoutes);
router.use('/alimento', alimentoRoutes);
router.use('/receta', recetaRoutes);
router.use('/receta-alimento', recetaAlimentoRoutes);

export default router;
