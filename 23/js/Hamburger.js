export const HAMBURGER_SIZES = {
  SMALL: { price: 50, calories: 20 },
  BIG: { price: 100, calories: 40 },
};

export const HAMBURGER_STUFFING = {
  CHEESE: { price: 10, calories: 20 },
  SALAD: { price: 20, calories: 5 },
  POTATO: { price: 15, calories: 10 },
};

export const HAMBURGER_TOPPINGS = {
  MAYO: { price: 20, calories: 5 },
  SAUCE: { price: 15, calories: 0 },
};

export class Hamburger {
  constructor(size, stuffing) {
    if (!Object.values(HAMBURGER_SIZES).includes(size)) {
      throw new Error("Invalid hamburger size");
    }
    if (!Object.values(HAMBURGER_STUFFING).includes(stuffing)) {
      throw new Error("Invalid hamburger stuffing");
    }

    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) {
    if (!Object.values(HAMBURGER_TOPPINGS).includes(topping)) {
      throw new Error("Invalid hamburger topping");
    }
    this.toppings.push(topping);
  }

  calculate() {
    return (
      this.size.calories +
      this.stuffing.calories +
      this.toppings.reduce((sum, topping) => sum + topping.calories, 0)
    );
  }

  calculatePrice() {
    return (
      this.size.price +
      this.stuffing.price +
      this.toppings.reduce((sum, topping) => sum + topping.price, 0)
    );
  }
}

export default Hamburger;
