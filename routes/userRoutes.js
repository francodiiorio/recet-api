import { Router } from 'express';
import UserController from '../controller/UserController.js';
import { validateUser } from '../middlewares/validateUser.js';

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/', userController.createUser);
userRoutes.post('/login', userController.login);
userRoutes.get('/me', validateUser, userController.me)
userRoutes.get('/', userController.getAllUsers);
userRoutes.get('/:id', userController.getUserbyId);
userRoutes.put('/:id', userController.updateUser);
userRoutes.delete('/:id', userController.deleteUser);

export default userRoutes;
