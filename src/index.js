import express from 'express';
import bodyParser from 'body-parser';

import indexController from './controllers/index';
import usersController from './controllers/users';

import myLogger from './middleware/myLogger';
import initStubData from './utilities/initStubData';

// if init of data is needed, uncomment:
//initStubData();

const app = express();
const PORT = 3000;

app.use(myLogger);
app.use(bodyParser.json());

app.get('/', indexController);
app.get('/users', usersController);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
