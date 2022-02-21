import assert from 'assert';
import {defineRoute} from '../libs/route';
import GetAccountStatus from '../../application/account/GetAccountStatus';
import {InvalidParameters} from '../../common/error/errors';

export default defineRoute('get', '/account/status', async (req, res) => {
  const {studentId, password} = req.query;

  assert(studentId, InvalidParameters());
  assert(typeof studentId === 'string' && [9, 10].includes(studentId.length), InvalidParameters());

  assert(password, InvalidParameters());
  assert(typeof password === 'string' && password.length > 0, InvalidParameters());

  const status = await GetAccountStatus.run({
    studentId: studentId,
    passwordEncrypted: password,
  });

  return res.json(status);
});
