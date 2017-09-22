import indexRouter from './routes/index.js';
import birdsRouter from './routes/birds';
import usersRouter from './routes/users';

export default [
  {
    path: '/',
    handler: indexRouter,
  },
  {
    path: '/birds',
    handler: birdsRouter,
  },
  {
    path: '/users',
    handler: usersRouter,
  },
];
