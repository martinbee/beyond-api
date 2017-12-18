import express from 'express';

import {
  connectMongoose,
  seedDb,
  setupMiddleware,
  setupCors,
  setupRoutes,
  setupErrorHandling,
} from './utilities';
import routes from './routes';

connectMongoose();

const app = express();
const PORT = process.env.PORT || 3000;

seedDb();

setupMiddleware(app);
setupCors(app); // Development only
setupRoutes(app, routes);
setupErrorHandling(app);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
