import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

// routes.get('/', async (req, res) => {
//   const adm2 = await User.create({
//     name: 'adm2',
//     email: 'adm2@adm.com',
//     password: '1234567',
//   });

//   res.json(adm2);
// });

module.exports = routes;
