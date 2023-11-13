import { User } from '../models/index.js';
import { generateToken, verifyToken } from '../utils/jwt.js';



class UserController {
  constructor() {}

  createUser = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await User.create({ name, email, password });
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
      });
      res.status(200).send({ success: true, message: users });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  getUserbyId = async (req, res) => {
    try {
      const { id } = req.params;

      const usuario = await User.findByPk(id);
      if (!usuario) throw new Error('No existe el usuario con ese ID');
      res.status(200).send({ success: true, message: usuario });
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
      const { email, password } = req.body;
      const user = await User.findOne({
        where: { email: email },
      });
      if (!user) throw new Error('Usuario no encontrado');

      const validate = await user.validatePassword(password)
      if(!validate) throw new Error('Contraseña incorrecta')

      const payload = {
        id: user.id,
      }
      
      const token = generateToken(payload)
      res.cookie('token', token)

      res.status(200).send({ success: true, message: 'Usuario logueado' });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
  me = async (req, res) => {
    try {
      const {user} = req;
      res.status(200).send({ success: true, message: 'ok', data: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}
export default UserController;
