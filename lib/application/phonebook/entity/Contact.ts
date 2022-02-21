export default class Contact {
  constructor(
    readonly name: string,
    readonly position: string,
    readonly phone: string,
    readonly department: string,
    readonly college: string
  ) {}

  static fromRow({NAME, POSITION, PHONE, DPART, PART}: Record<string, any>) {
    return new Contact(NAME, POSITION, PHONE, DPART, PART);
  }

  toResponse() {
    return {
      NAME: this.name,
      POSITION: this.position,
      PHONE: this.phone,
      DPART: this.department,
      PART: this.college,
    };
  }
}
