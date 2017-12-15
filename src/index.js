import express from 'express';

import {
  connectMongoose,
  initStubData,
  setupMiddleware,
  setupCors,
  setupRoutes,
  setupErrorHandling,
} from './utilities';
import routes from './routes';

connectMongoose();

const app = express();
const PORT = process.env.PORT || 3000;

// Refactor below code so that it checks itself
// if init of data is needed, uncomment:
initStubData();

setupMiddleware(app);
// Development only
setupCors(app);
setupRoutes(app, routes);
setupErrorHandling(app);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
