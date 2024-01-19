/*
Створити скрипт який має визначити середнє арифметичне трьох чисел з насутпними умовами:
    отримати від користувача через три prompt три числа
    показати через alert середнє арифметичне цих чисел
*/

const num1 = +prompt("Enter number 1:");

if (isNaN(num1)) {
  alert("You have not entered number");
} else {
  const num2 = +prompt("Enter number 2:");
  if (isNaN(num2)) {
    alert("You have not entered number");
  } else {
    const num3 = +prompt("Enter number 3:");
    if (isNaN(num3)) {
      alert("You have not entered number");
    } else {
      const avg = (num1 + num2 + num3) / 3;
      alert(`The average of numbers is ${avg}`);
    }
  }
}
