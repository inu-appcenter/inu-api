import {log} from '../../common/utils/log';
import assert from 'assert';
import UseCase from '../../common/base/UseCase';
import AccountStatus from './entity/AccountStatus';
import AccountRepository from './data/AccountRepository';
import {InvalidCredentials} from '../../common/error/errors';

type Params = {
  studentId: string;
  password: string;
};

/**
 * 주어진 학번과 비밀번호를 가지고, 해당 학생의 재학 상태를 알아냅니다.
 * 학번과 비밀번호가 올바르지 않으면 예외를 던집니다.
 */
class GetAccountStatus extends UseCase<Params, AccountStatus> {
  constructor(private readonly accountRepository: AccountRepository) {
    super();
  }

  async onExecute({studentId, password}: Params): Promise<AccountStatus> {
    const authenticated = await this.accountRepository.isAuthenticated(studentId, password);

    // 학번/비번 틀리면(=본인 아니면) 알려주지도 않을거임.
    assert(authenticated, InvalidCredentials());

    const undergraduate = await this.accountRepository.isUndergraduate(studentId);

    log(`${studentId}씨는 ${undergraduate ? '재학생입니다.' : '졸업생 또는 수료생입니다.'}`);

    return new AccountStatus(undergraduate);
  }
}

export default new GetAccountStatus(new AccountRepository());
