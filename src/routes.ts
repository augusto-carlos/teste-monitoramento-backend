import { Router } from 'express';
import UserController from './controllers/user-controller';

const routes = Router();
const userController = new UserController();

routes.get('/users', userController.index);
routes.get('/users/:userId/posts', userController.getPostsByUser);
routes.get('/users/:userId', userController.getUserById);

export default routes;
