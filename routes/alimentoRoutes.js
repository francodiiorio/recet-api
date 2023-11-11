import { Router } from 'express';
import AlimentoController from '../controller/AlimentoController.js';
const alimentoRoutes = Router();
const alimentoController = new AlimentoController();

alimentoRoutes.post('', alimentoController.createAlimento);
alimentoRoutes.get('', alimentoController.getAllAlimentos);
alimentoRoutes.get('/:id', alimentoController.getAlimentoById);
alimentoRoutes.put('/:id', alimentoController.updateAlimento);
alimentoRoutes.delete('/:id', alimentoController.deleteAlimento);

export default alimentoRoutes;
