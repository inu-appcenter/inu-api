import config from '../../config';
import express from 'express';
import {errorHandler} from './middleware/errorHandler';
import {registerRoutes} from '../common/utils/express';

export async function startServer() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

  await registerRoutes(app, __dirname + './routes');

  app.use(errorHandler());

  app.listen(config.server.port);
}
