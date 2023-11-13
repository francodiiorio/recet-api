import { AlimentoReceta } from '../models/index.js';

class RecetaAlimentoController {
  getAllAlimentosRecetas = async (req, res) => {
    try {
      const allRecetas = await AlimentoReceta.findAll({
        attributes: ['recetaId', 'alimentoId'],
      });
      res.status(200).send({ success: true, message: allRecetas });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  asociarAlimentoAReceta = async (req, res) => {
    try {
      const { recetaId, alimentoId } = req.body;

      await AlimentoReceta.create({ recetaId, alimentoId });

      res
        .status(200)
        .send({ success: true, message: 'Asociación creada correctamente' });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  eliminarAsociacion = async (req, res) => {
    try {
      const { recetaId, alimentoId } = req.body;

      await AlimentoReceta.destroy({ where: { recetaId, alimentoId } });

      res
        .status(200)
        .send({ success: true, message: 'Asociación eliminada correctamente' });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default RecetaAlimentoController;
