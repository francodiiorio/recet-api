import { Router } from 'express';
import UserController from '../controller/UserController.js';
const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/', userController.createUser);
userRoutes.post('/login', userController.login);
userRoutes.get('/', userController.getAllUsers);
userRoutes.get('/:id', userController.getUserbyId);
userRoutes.put('/:id', userController.updateUser);
userRoutes.delete('/:id', userController.deleteUser);
// userRoutes.post('/login', userController.login);
// userRoutes.get('/me', userController.me);

export default userRoutes;
