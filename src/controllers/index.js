import myLogger from '../middleware/myLogger';

export default [
  (req, res) => {
    res.send('Hello World!');
  },
  myLogger,
];
