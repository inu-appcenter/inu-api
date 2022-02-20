export default class AccountStatus {
  constructor(readonly undergraduate: boolean) {}

  toResponse() {
    return {
      undergraduate: this.undergraduate,
    };
  }
}
