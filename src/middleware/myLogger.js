const myLogger = (req, res, next) => {
  console.log(req);
  console.log(`${req} at ${new Date()}`);
  next();
};

export default myLogger;
