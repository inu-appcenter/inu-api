import BaseOracleRepository from '../../../common/base/BaseOracleRepository';

/**
 * 학사 계정 상태(학적)를 가져오는 저장소입니다.
 */
export default class AccountRepository extends BaseOracleRepository {
  /**
   * 주어진 인증 정보가 교내 포털에 로그인 가능한 상태인지 확인합니다.
   * 학번과 비밀번호 모두 유효한 것으로 주어질 때 true를 반환합니다.
   *
   * @param studentId 학번
   * @param password 비밀번호(평문)
   */
  async isAuthenticated(studentId: string, password: string): Promise<boolean> {
    const sql = 'SELECT F_LOGIN_CHECK(:studentId, :password) AS success FROM DUAL';

    const result = await this.execute(sql, {studentId, password});

    // @ts-ignore
    return result.rows[0][0] === 'Y';
  }

  /**
   * 주어진 학번을 가지는 구성원이 존재하며, 또한 해당 구성원이 학부 재학/휴학중인지 여부를 확인합니다.
   * 구성원이 없거나, 학부생이 아닌 대학원생이거나, 수료 또는 졸업한 상태이면 false입니다.
   *
   * 2022년 9월 13일부터 학사 DB의 학적 체크 함수의 이름이 F_ENROLL_APP_CHECK로 바뀌었습니다.
   * 잇츠미와 구분되는, 앱센터에서 사용하는 재학생 체크 함수라는 의미입니다.
   *
   * @param studentId 학번
   */
  async isUndergraduate(studentId: string): Promise<boolean> {
    const sql = 'SELECT F_ENROLL_APP_CHECK(:studentId) AS success FROM DUAL';

    const result = await this.execute(sql, {studentId});

    // @ts-ignore
    return result.rows[0][0] === 'Y';
  }
}
