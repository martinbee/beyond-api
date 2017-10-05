import usersRouter from './users';
import workoutsRouter from './workouts';

export default [
  {
    path: '/users',
    handler: usersRouter,
  },
  {
    path: '/workouts',
    handler: workoutsRouter,
  },
];
