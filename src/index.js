import express from 'express';

import {
  //initStubData,
  setupMiddleware,
  setupRoutes,
  setupErrorHandling,
} from './utilities';


const app = express();
const PORT = process.env.PORT || 3000;

// if init of data is needed, uncomment:
//initStubData();

setupMiddleware(app);
setupRoutes(app);
setupErrorHandling(app);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
