import winston from 'winston';
import { errorLogger } from 'express-winston';

export default errorLogger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true,
    }),
  ],
});
