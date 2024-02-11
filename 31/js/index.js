/*
Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел (наприклад [1,2, 3]) і генерує список з елементів:
*/
import generateList from "./generateList.js";

const root = document.querySelector("#root");

root.appendChild(generateList([1, 2, [1.1, 1.2, 1.3, ["1.4.1", "1.4.2"]], 3]));
