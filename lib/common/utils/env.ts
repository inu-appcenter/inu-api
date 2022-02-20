import assert from 'assert';

export function getEnv(key: string, fallback?: any): any {
  const allEnvArgs = process.env;

  return allEnvArgs[key] || fallback;
}

export function requireEnv(key: string): any {
  const env = getEnv(key);

  assert(env, new Error(`환경변수 '${key}'가 필요합니다!`));

  return env;
}
