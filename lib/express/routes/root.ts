import express from 'express';
import oracledb from 'oracledb';

export default express.Router().get('/', async (req, res) => {
  try {
    const connection = await oracledb.getPool().getConnection();
    await connection.execute('SELECT 1 FROM DUAL');
    await connection.release();

    return res.send('서버도 DB도 살아있음!');
  } catch (e) {
    return res.status(500).send(`서버는 살아있으나 DB가 죽음: ${e}`);
  }
});
