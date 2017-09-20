const myLogger = (req, res, next) => {
  console.log(`Request at ${Date.now()}`);
  next();
};

export default myLogger;
