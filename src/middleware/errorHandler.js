export default (err, req, res, next) => {
  if (res.headersSent) return next(err);

  const { status, message } = err;

  return res.status(status || 500).send({ error: message || 'Something failed (╯°□°）╯' });
};
