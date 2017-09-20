import express from 'express';
import indexController from './controllers/index.js';
import myLogger from './middleware/myLogger';

const app = express();
const PORT = 3000;

app.use(myLogger);

app.get('/', indexController);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
