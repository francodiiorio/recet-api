import { Receta } from '../models/index.js';

class RecetaContrecetaler {
  constructor() {}

  createReceta = async (req, res) => {
    try {
      const { recetaName } = req.body;
      const newReceta = await Receta.create({ recetaName });
      if (!newReceta) throw new Error('no se pudo crear la receta');
      res.status(200).send({ success: true, message: newReceta });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  getAllRecetas = async (req, res) => {
    try {
      const allRecetas = await Receta.findAll({
        attributes: ['id', 'RecetaName'],
      });
      res.status(200).send({ success: true, message: allRecetas });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  getRecetaById = async (req, res) => {
    try {
      const { id } = req.params;
      //  const Receta = await Receta.findOne({
      //    where: {
      //      id,
      //    },
      //  });
      const Receta = await Receta.findByPk(id);
      if (!Receta) throw new Error('No existe el receta con ese ID');

      res.status(200).send({ success: true, message: Receta });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  updateReceta = async (req, res) => {
    try {
      res.status(200).send('update Receta');
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteReceta = async (req, res) => {
    try {
      res.status(200).send('delete Receta');
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default RecetaContrecetaler;
