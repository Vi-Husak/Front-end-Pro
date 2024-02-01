/*
Мережа фастфудів пропонує кілька видів гамбургерів:

    маленький (50 тугриків, 20 калорій);
    великий (100 тугриків, 40 калорій).

Гамбургер може бути з одним із декількох видів начинок:

    сиром (+ 10 тугриків, + 20 калорій);
    салатом (+ 20 тугриків, + 5 калорій);
    картоплею (+ 15 тугриків, + 10 калорій).

Можна додати добавки:

    посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).

Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.

(підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)

Приклад роботи коду:

// маленький гамбургер з начинкою з сиру
var hamburger = new Hamburger(Hamburger .SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log(“Calories: “ + hamburger.calculate ());

// скільки коштує
console.log("Price: “ + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger .TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce: “ + hamburger.calculatePrice());

*/

import {
  HAMBURGER_SIZES,
  HAMBURGER_STUFFING,
  HAMBURGER_TOPPINGS,
  Hamburger,
} from "./Hamburger.js";

const hamburger = new Hamburger(
  HAMBURGER_SIZES.SMALL,
  HAMBURGER_STUFFING.CHEESE
);

hamburger.addTopping(HAMBURGER_TOPPINGS.MAYO);

console.log("Calories: " + hamburger.calculate());

console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(HAMBURGER_TOPPINGS.SAUCE);

console.log("Price with sauce: " + hamburger.calculatePrice());
