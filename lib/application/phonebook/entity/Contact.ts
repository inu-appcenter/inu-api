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
      name: this.name,
      position: this.position,
      phone: this.phone,
      department: this.department,
      college: this.college,
    };
  }

  toLegacyResponse() {
    return {
      NAME: this.name,
      POSITION: this.position,
      PHONE: this.phone,
      DPART: this.department,
      PART: this.college,
    };
  }
}
