import { Alimento } from '../models/index.js';

class AlimentoController {
  constructor() {}

  createAlimento = async (req, res) => {
    try {
      const { alimentoName } = req.body;
      const newAlimento = await Alimento.create({ alimentoName });
      if (!newAlimento) throw new Error('no se pudo crear el alimento');
      res.status(200).send({ success: true, message: newAlimento });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  getAllAlimentos = async (req, res) => {
    try {
      const allAlimentos = await Alimento.findAll({
        attributes: ['id', 'alimentoName'],
      });
      res.status(200).send({ success: true, message: allAlimentos });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  getAlimentoById = async (req, res) => {
    try {
      const { id } = req.params;

      const alimento = await Alimento.findByPk(id);
      if (!alimento) throw new Error('No existe el alimento con ese ID');

      res.status(200).send({ success: true, message: alimento });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  updateAlimento = async (req, res) => {
    try {
      const { alimentoName } = req.body;
      const { id } = req.params;
      const alimento = await Alimento.update(
        { alimentoName },
        {
          where: { id },
        }
      );
      if (!alimento[0])
        throw new Error('no se encontro alimento para modificar');
      res.status(200).send('Alimento updated');
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteAlimento = async (req, res) => {
    try {
      const { id } = req.params;
      const alimento = await Alimento.destroy({
        where: { id },
      });

      if (!alimento) throw new Error('no se encontro alimento para eliminar');
      res.status(200).send('alimento eliminado');
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default AlimentoController;
