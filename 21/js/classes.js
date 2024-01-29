export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  outPersonInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

export class Auto {
  constructor(make, model, year, registrationNumber) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.registrationNumber = registrationNumber;
    this.owner = null;
  }

  assignOwner(person) {
    if (person instanceof Person)
      if (person.age >= 18) this.owner = person;
      else
        console.log(
          `${person.name} cannot be the owner of a car because he is not 18 years old`
        );
    else console.error("Invalid owner");
  }

  outAutoInfo() {
    console.log(
      `${this.make} ${this.model} ${this.year} ${this.registrationNumber}`
    );
    if (this.owner) this.owner.outPersonInfo();
    else console.log("The Auto doesn't have owner");
  }
}
