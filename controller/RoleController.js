import { Role } from '../models/index.js';

class RoleController {
  constructor() {}

  createRole = async (req, res) => {
    try {
      const { roleName } = req.body;
      const newRole = await Role.create({ roleName });
      if (!newRole) throw new Error('no se pudo crear el usuario');
      res.status(200).send({ success: true, message: newRole });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  getAllRoles = async (req, res) => {
    try {
      const allRoles = await Role.findAll({
        attributes: ['id', 'roleName'],
      });
      res.status(200).send({ success: true, message: allRoles });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  getRoleById = async (req, res) => {
    try {
      const { id } = req.params;
      //  const role = await Role.findOne({
      //    where: {
      //      id,
      //    },
      //  });
      const role = await Role.findByPk(id);
      if (!role) throw new Error('No existe el rol con ese ID');

      res.status(200).send({ success: true, message: role });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  updateRole = async (req, res) => {
    try {
      res.status(200).send('update role');
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteRole = async (req, res) => {
    try {
      res.status(200).send('delete role');
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default RoleController;
