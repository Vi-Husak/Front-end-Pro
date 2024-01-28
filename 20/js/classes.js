export class Human {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

export class Appartment {
  residents = [];

  addResident(human) {
    if (human instanceof Human) this.residents.push(human);
    return this;
  }
}

export class Building {
  appartments = [];

  constructor(maxApps) {
    this.maxApps = maxApps;
  }

  addAppartment(appartment) {
    if (appartment instanceof Appartment) {
      if (this.appartments.length < this.maxApps) {
        this.appartments.push(appartment);
      } else console.log("Building has maximum apartments");
    } else console.error("Invalid props");

    return this;
  }
}
