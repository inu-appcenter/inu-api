import oracledb from 'oracledb';
import {DatabaseFailure} from '../error/errors';

export default class BaseOracleRepository {
  protected async execute(sql: string, variables: Record<string, any> = {}) {
    const pool = oracledb.getPool();
    const connection = await pool.getConnection();

    try {
      return await connection.execute(sql, variables);
    } catch (e) {
      console.error(e);
      throw DatabaseFailure();
    } finally {
      await connection.release();
    }
  }
}
