/* 
Створити масив, довжину та елементи якого задає користувач.
Відсортувати масив за зростанням.
Видалити елементи з масиву з 2 по 4 (включно!).
У міру змін виводити вміст масиву на сторінку.
*/

import { displayArr, createArr } from "./utils/index.js";

const length = prompt("Введіть розмір масиву")?.trim();
if (length === null || !length || isNaN(length) || length < 0) {
  alert("Шкода, що ви не захотіли розмір масиву");
} else {
  const array = createArr(length);
  displayArr("Початковий масив", array);

  array.sort((a, b) => a - b);
  displayArr("Відсортований масив", array);

  array.splice(2, 2);
  displayArr("Масив без елементів з 2 по 4 (включно!)", array);
}
