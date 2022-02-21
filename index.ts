import {log} from './lib/common/utils/log';
import {startServer} from './lib/express/server';
import {startOracle} from './lib/oracle/db';

async function start() {
  log('오라클 시작!');
  await startOracle();

  log('서버 시작!');
  await startServer();
}

start().then(() => log('이제부터 요청을 받습니다!'));
