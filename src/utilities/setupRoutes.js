import routes from '../routes';

export default function setupRoutes(app) {
  routes.forEach(({ path, handler }) => app.use(path, handler));
}
