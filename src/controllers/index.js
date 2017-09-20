import myLogger from '../middleware/myLogger';

export default [
  (req, res, next) => {
    console.log('Test');
    next();
  },
  (req, res) => {
    res.send('Hello World!');
  },
];
