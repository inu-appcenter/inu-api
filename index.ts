import {startServer} from './lib/express/server';
import {startOracle} from './lib/oracle/db';

async function start() {
  await startOracle();
  await startServer();
}

start().then(() => console.log('서버 시작!!!!'));
