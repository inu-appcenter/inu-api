import config from '../../config';
import express from 'express';
import {errorHandler} from './middleware/errorHandler';

export async function startServer() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

  app.use(errorHandler());

  app.listen(config.server.port);
}
