import { User } from '../models/index.js';

class UserController {
  constructor() {}

  createUser = async (req, res) => {
    try {
      const { name, email } = req.body;
      const user = await User.create({ name, email });
      if (!user) throw new Error(' no se pudo crear el usuario');
      res.status(200).send({ success: true, message: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll({
        attributes: ['id', 'name', 'email'],
        include: [
          // {
          //   model: Role,
          //   attributes: ['roleName'],
          // },
        ],
      });
      res.status(200).send({ success: true, message: users });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  getUserbyId = async (req, res) => {
    try {
      res.status(200).send({ success: true, message: 'ok' });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  updateUser = async (req, res) => {
    try {
      const { name, email } = req.body;
      const { id } = req.params;
      const user = await User.update(
        { name, email },
        {
          where: { id },
        }
      );
      if (!user[0]) throw new Error('no se encontro usuario para modificar');
      res.status(200).send({ success: true, message: 'usuario modificado' });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.destroy({
        where: { id },
      });

      if (!user) throw new Error('no se encontro usuario para eliminar');
      res.status(200).send({ success: true, message: 'Usuario eliminado' });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  login = async (req, res) => {
    try {
      res.status(200).send({ success: true, message: 'ok' });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  me = async (req, res) => {
    try {
      res.status(200).send({ success: true, message: 'ok' });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}
export default UserController;
