import config from '../../config';
import express from 'express';
import {errorHandler} from './middleware/errorHandler';
import {registerRoutes} from '../common/utils/express';
import path from 'path';

export async function startServer() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

  await registerRoutes(app, path.join(__dirname, 'routes'));

  app.use(errorHandler());

  app.listen(config.server.port);
}
