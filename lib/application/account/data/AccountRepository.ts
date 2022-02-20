import BaseOracleRepository from '../../../common/base/BaseOracleRepository';

export default class AccountRepository extends BaseOracleRepository {
  async isUndergraduate(studentId: string): Promise<boolean> {
    const sql = 'SELECT F_ENROLL_CHECK(:studentId) AS success FROM DUAL';

    const result = await this.execute(sql, {studentId});

    // @ts-ignore
    return result.rows[0][0] === 'Y';
  }

  async isAuthenticated(studentId: string, password: string): Promise<boolean> {
    const sql =
      studentId.length === 9
        ? 'SELECT F_LOGIN_CHECK(:studentId, :password) AS success FROM DUAL'
        : 'SELECT F_LOGIN_KLIN(:studentId, :password) AS success FROM DUAL';

    const result = await this.execute(sql, {studentId, password});

    // @ts-ignore
    return result.rows[0][0] === 'Y';
  }
}
