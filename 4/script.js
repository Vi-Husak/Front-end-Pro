/* 
Створити скрипт який повинен виконувати наступне:
    питаємо у користувача, що він хоче зробити (add, sub, mult, div);
    питаємо у користувача перше число;
    запитуємо у користувача друге число;
    виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад "2 + 3 = 5").
*/

const action = prompt(
  "Enter the action you want to perform (add, sub, mult, div):"
);

const num1 = +prompt("Enter the number 1:");

if (!isNaN(num1)) {
  const num2 = +prompt("Enter the number 2:");
  if (!isNaN(num2)) {
    switch (action) {
      case "add":
        alert(`${num1} + ${num2} = ${num1 + num2}`);
        break;
      case "sub":
        alert(`${num1} - ${num2} = ${num1 - num2}`);
        break;
      case "mult":
        alert(`${num1} * ${num2} = ${num1 * num2}`);
        break;
      case "div":
        alert(`${num1} / ${num2} = ${num1 / num2}`);
        break;

      default:
        alert("You have entered an incorrect action.");
        break;
    }
  } else alert("You have not entered a number.");
} else alert("You have not entered a number.");
