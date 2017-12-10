export default function setupRoutes(app, routes) {
  routes.forEach(({ path, handler }) => app.use(path, handler));
}
