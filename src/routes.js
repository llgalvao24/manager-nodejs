import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

// routes.get('/', async (req, res) => {
//   const adm2 = await User.create({
//     name: 'adm2',
//     email: 'adm2@adm.com',
//     password: '1234567',
//   });

//   res.json(adm2);
// });

module.exports = routes;
