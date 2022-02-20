import {startServer} from './lib/express/server';
import {startOracle} from './lib/oracle/db';

async function start() {
  console.log('오라클 시작!');
  await startOracle();

  console.log('서버 시작!');
  await startServer();
}

start().then(() => console.log('이제부터 요청을 받습니다!'));
