
class Name {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFristName() {
    return `first name is ${this.firstName}`;
  }

  getLastName() {
    return `last name is ${this.lastName}`;
  }
}

class AnimalName extends Name{
  constructor() {
    super("daniel", "hemmati");
    
  }
}
const myName = new Name("daniel", "codex");


export default myName;
