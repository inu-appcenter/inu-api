import {startServer} from './lib/express/server';

async function start() {
  await startServer();
}

start().then(() => console.log('서버 시작!!!!'));
