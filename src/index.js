import express from 'express';
import indexController from './controllers/index.js';

const app = express();
const PORT = 3000;

app.get('/', indexController);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
