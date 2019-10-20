import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const adm2 = await User.create({
    name: 'adm2',
    email: 'adm2@adm.com',
    password: '1234567',
  });

  res.json(adm2);
});

module.exports = routes;
