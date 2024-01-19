/*
Створити скрипт для додавання, віднімання, множення та поділу двох чисел та виведення результатів.
Користувач вводить два числа через два промпти, і повідомлення виводиться алертом з таким результатом:

//Користувач ввів 2 і 2:
    2+2=4
    2-2=0
    2*2=4
    2/2=1
*/

const num1 = +prompt("Enter number 1:");
const num2 = +prompt("Enter number 2:");

if (!isNaN(num1) && !isNaN(num2)) {
  const res = `
        ${num1}+${num1}=${num1 + num2}
        ${num1}-${num1}=${num1 - num2}
        ${num1}*${num1}=${num1 * num2}
        ${num1}/${num1}=${num1 / num2}
    `;

  alert(res);
} else {
  alert("You have not entered a number!");
}
