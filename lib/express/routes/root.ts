import express from 'express';
import oracledb from 'oracledb';

export default express.Router().get('/', async (req, res) => {
  const pool = oracledb.getPool();
  const connection = await pool.getConnection();
  await connection.execute('SELECT 1');
  await connection.release();

  return res.send('서버도 DB도 살아있음!');
});
