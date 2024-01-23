/* 
    Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
    Знайти мінімальний елемент масиву та його порядковий номер.
    Знайти максимальний елемент масиву та його порядковий номер.
    Визначити кількість негативних елементів.
    Знайти кількість непарних позитивних елементів.
    Знайти кількість парних позитивних елементів.
    Знайти суму парних позитивних елементів.
    Знайти суму непарних позитивних елементів.
    Знайти добуток позитивних елементів.
    Знайти найбільший серед елементів масиву, ост альні обнулити.
*/
import {
  maxElement,
  minElement,
  findNumberOfElements,
  sumElements,
  multElements,
  zeroElements,
  displayArr,
  displayVar,
} from "./utils/index.js";

const array = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

displayArr("Дано масив", array);

displayVar("Мінімальний елемент масиву", minElement(array));
displayVar("Його порядковий номер", array.indexOf(minElement(array)));

displayVar("Максимальний елемент масиву", maxElement(array));
displayVar("Його порядковий номер", array.indexOf(maxElement(array)));

displayVar(
  "Кількість негативних елементів",
  findNumberOfElements(array, (element) => element < 0)
);

displayVar(
  "Кількість непарних позитивних елементів",
  findNumberOfElements(array, (element) => element > 0 && element % 2 !== 0)
);

displayVar(
  "Кількість парних позитивних елементів",
  findNumberOfElements(array, (element) => element > 0 && element % 2 === 0)
);

displayVar(
  "Сума парних позитивних елементів",
  sumElements(array, (element) => element > 0 && element % 2 === 0)
);

displayVar(
  "Сума парних позитивних елементів",
  sumElements(array, (element) => element > 0 && element % 2 !== 0)
);

displayVar(
  "Добуток парних позитивних елементів",
  multElements(array, (element) => element > 0).toLocaleString()
);

displayArr("Обнулений масив", zeroElements(array, maxElement(array)));
