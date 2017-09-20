import express from 'express';
import indexController from './controllers/index.js';
import myLogger from './middleware/myLogger';
import initStubData from './utilities/initStubData';

// if init of data is needed, uncomment:
initStubData();
const app = express();
const PORT = 3000;

app.use(myLogger);

app.get('/', indexController);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
