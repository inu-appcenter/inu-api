export default class Contact {
  constructor(
    readonly name: string,
    readonly position: string,
    readonly phone: string,
    readonly department: string,
    readonly college: string
  ) {}

  static fromRow([name, position, phone, dpart, part]: any[]) {
    return new Contact(name, position, phone, dpart, part);
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
