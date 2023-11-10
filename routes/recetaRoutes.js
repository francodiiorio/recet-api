import { Router } from 'express';
import RecetaController from '../controller/RecetaController.js';
const recetaRoutes = Router();
const recetaController = new RecetaController();

recetaRoutes.post('', recetaController.createReceta);
recetaRoutes.get('', recetaController.getAllRecetas);
recetaRoutes.get('/:id', recetaController.getRecetaById);
recetaRoutes.put('/:id', recetaController.updateReceta);
recetaRoutes.delete('/:id', recetaController.deleteReceta);

export default recetaRoutes;
