import bodyParser from 'body-parser';
import helmet from 'helmet';
import { logger } from '../middleware';

export default function setupMiddleware(app) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(logger);
  app.use(helmet());
}
