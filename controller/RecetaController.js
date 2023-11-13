import { Receta } from '../models/index.js';

class RecetaController {
  constructor() {}

  createReceta = async (req, res) => {
    try {
      const { recetaName, calorias } = req.body;
      const newReceta = await Receta.create({ recetaName, calorias });
      if (!newReceta) throw new Error('no se pudo crear la receta');
      res.status(200).send({ success: true, message: newReceta });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  getAllRecetas = async (req, res) => {
    try {
      const allRecetas = await Receta.findAll({
        attributes: ['id', 'recetaName', 'calorias'],
      });
      res.status(200).send({ success: true, message: allRecetas });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  getRecetaById = async (req, res) => {
    try {
      const { id } = req.params;

      const receta = await Receta.findByPk(id);
      if (!receta) throw new Error('No existe el receta con ese ID');

      res.status(200).send({ success: true, message: receta });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  updateReceta = async (req, res) => {
    try {
      const { recetaName } = req.body;
      const { id } = req.params;
      const receta = await Receta.update(
        { recetaName },
        {
          where: { id },
        }
      );
      if (!receta[0]) throw new Error('no se encontro receta para modificar');
      res.status(200).send('Receta Updated');
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteReceta = async (req, res) => {
    try {
      const { id } = req.params;
      const receta = await Receta.destroy({
        where: { id },
      });

      if (!receta) throw new Error('no se encontro receta para eliminar');
      res.status(200).send('Receta eliminada');
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default RecetaController;
