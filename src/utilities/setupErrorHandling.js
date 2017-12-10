import {
  routeNotFoundHandler,
  errorLogger,
  errorHandler,
} from '../middleware';

export default function setupErrorHandling(app) {
  app.get('*', routeNotFoundHandler);
  app.use(errorLogger);
  app.use(errorHandler);
}
