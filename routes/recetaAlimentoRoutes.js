import { Router } from 'express';
import RecetaAlimentoController from '../controller/RecetaAlimentoController.js';

const recetaAlimentoRoutes = Router();
const recetaAlimentoController = new RecetaAlimentoController();

// recetaAlimentoRoutes.post(
//   '/asociar',
//   recetaAlimentoController.asociarAlimentoAReceta
// );
// recetaAlimentoRoutes.post(
//   '/eliminar',
//   recetaAlimentoController.eliminarAsociacion
// );
recetaAlimentoRoutes.get('', recetaAlimentoController.getAllAlimentosRecetas);

recetaAlimentoRoutes.post('/asociar', async (req, res) => {
  try {
    await recetaAlimentoController.asociarAlimentoAReceta(req, res);
  } catch (error) {
    console.error('Error al asociar alimento a receta:', error);
    res
      .status(500)
      .send({ success: false, message: 'Error interno del servidor' });
  }
});

recetaAlimentoRoutes.post('/desasociar', async (req, res) => {
  try {
    await recetaAlimentoController.eliminarAsociacion(req, res);
  } catch (error) {
    console.error('Error al asociar alimento a receta:', error);
    res
      .status(500)
      .send({ success: false, message: 'Error interno del servidor' });
  }
});

export default recetaAlimentoRoutes;
