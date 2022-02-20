import oracledb from 'oracledb';
import config from '../../config';

export async function startOracle() {
  await oracledb.createPool(config.db);
}
