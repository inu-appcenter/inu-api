export default class AccountRepository {
  async isUndergraduate(studentId: string): Promise<boolean> {
    return true;
  }

  async isAuthenticated(studentId: string, password: string): Promise<boolean> {
    return true;
  }
}
