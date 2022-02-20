import root from './routes/root';
import config from '../../config';
import express from 'express';
import account from './routes/account';
import contacts from './routes/contacts';
import {errorHandler} from './middleware/errorHandler';

export async function startServer() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

  app.use(root); // 상태 체크용.
  app.use(account); // 카페테리아 로그인.
  app.use(contacts); // 전화번호부.

  app.use(errorHandler());

  app.listen(config.server.port);
}
