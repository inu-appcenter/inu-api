import assert from 'assert';
import {defineRoute} from '../libs/route';
import GetAccountStatus from '../../application/account/GetAccountStatus';
import {InvalidParameters} from '../../common/error/errors';
import {extractCredentials} from '../utils/credentials';

export default defineRoute('get', '/account/status', async (req, res) => {
  const credentials = extractCredentials(req.query, req.headers);

  assert(credentials, InvalidParameters());

  const {studentId, password} = credentials;

  assert(studentId, InvalidParameters());
  assert(typeof studentId === 'string' && [9].includes(studentId.length), InvalidParameters());

  assert(password, InvalidParameters());
  assert(typeof password === 'string' && password.length > 0, InvalidParameters());

  const status = await GetAccountStatus.run({
    studentId: studentId,
    password: password,
  });

  return res.json(status);
});
