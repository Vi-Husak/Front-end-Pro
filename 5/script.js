/* 
Напишіть скрипт, який переводить години в секунди і має робити насутпне:
    запитати у користувача кількість годин;
    порахувати, скільки секунд у цій кількості годин;
    записати обчислене значення у змінну;
    вивести цю змінну користувачеві через alert.
*/

const hours = +prompt("Enter the numrer of hours:");

if (isNaN(hours)) {
  alert("You have not entered a number");
} else {
  const seconds = hours * 60 * 60;
  alert(`${hours} hours contains ${seconds} seconds`);
}
