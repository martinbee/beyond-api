import winston from 'winston';
import { logger } from 'express-winston';

export default logger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true,
    }),
  ],
  meta: false,
  expressFormat: true,
  colorize: false,
});
