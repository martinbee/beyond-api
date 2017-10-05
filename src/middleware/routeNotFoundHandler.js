export default (req, res, next) => {
  const notFoundError = new Error('Invalid path');
  notFoundError.status = 404;

  next(notFoundError);
};
