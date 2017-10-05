export default (err, req, res, next) => {
  if (res.headersSent) {
    next(err);
  } else {
    const { status, message } = err;

    res.status(status || 500).send({ error: message || 'Something failed (╯°□°）╯' });
  }
};
