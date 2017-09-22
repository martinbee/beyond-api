import express from 'express';
import bodyParser from 'body-parser';

//import initStubData from './utilities/init/initStubData';
import myLogger from './middleware/myLogger';
import setupRoutes from './utilities/setupRoutes';

//
// if init of data is needed, uncomment:
//initStubData();

const app = express();
const PORT = 3000;

app.use(myLogger);
app.use(bodyParser.json());

setupRoutes(app);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
