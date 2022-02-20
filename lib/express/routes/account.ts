import assert from 'assert';
import express from 'express';
import GetAccountStatus from '../../application/account/GetAccountStatus';
import {InvalidParameters} from '../../common/error/errors';

export default express.Router().get('/account/status', async (req, res) => {
  const {studentId, password} = req.query;

  assert(studentId && typeof studentId === 'string', InvalidParameters());
  assert(password && typeof password === 'string', InvalidParameters());

  const status = await GetAccountStatus.run({
    studentId: studentId,
    passwordEncrypted: password,
  });

  return res.json(status);
});
