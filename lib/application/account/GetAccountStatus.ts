import config from '../../../config';
import assert from 'assert';
import UseCase from '../../common/base/UseCase';
import {decrypt} from '../../common/utils/cipher';
import AccountRepository from './AccountRepository';
import {InvalidCredentials} from '../../common/error/errors';

type Params = {
  studentId: string;
  passwordEncrypted: string;
};

type AccountStatus = {
  undergraduate: boolean;
};

/**
 * 주어진 학번과 비밀번호를 가지고, 해당 학생의 재학 상태를 알아냅니다.
 * 학번과 비밀번호가 올바르지 않으면 예외를 던집니다.
 */
class GetAccountStatus extends UseCase<Params, AccountStatus> {
  constructor(private readonly accountRepository: AccountRepository) {
    super();
  }

  async onExecute({studentId, passwordEncrypted}: Params): Promise<AccountStatus> {
    const password = decrypt(passwordEncrypted, config.auth.loginKey);
    const authenticated = await this.accountRepository.isAuthenticated(studentId, password);

    assert(authenticated, InvalidCredentials());

    const undergraduate = await this.accountRepository.isUndergraduate(studentId);

    return {undergraduate};
  }
}

export default new GetAccountStatus(new AccountRepository());
