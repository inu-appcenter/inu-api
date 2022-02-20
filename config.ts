import {getEnv, requireEnv} from './lib/common/utils/env';

export default {
  server: {
    port: getEnv('PORT', 8888),
  },

  auth: {
    loginKey: requireEnv('LOGIN_KEY'),
  },

  db: {
    user: requireEnv('DB_USER'),
    password: requireEnv('DB_PASSWORD'),
    connectString: requireEnv('DB_CONNECT_STRING'),
    poolMax: 8,
    poolMin: 1,
    poolTimeout: 60,
    poolIncrement: 1,
  },
};
