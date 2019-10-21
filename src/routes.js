import { Router } from 'express';

import UserController from './app/controllers/UserController';
import StudentController from './app/controllers/StudentController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/students', StudentController.store);

// routes.get('/', async (req, res) => {
//   const student = await Student.create({
//     name: 'Luiz',
//     email: 'llgalvao@gmail.com',
//     age: 29,
//     weight: 84.5,
//     height: 1.67,
//   });

//   res.json(student);
// });

module.exports = routes;
