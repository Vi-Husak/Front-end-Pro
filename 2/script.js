/* 
В якості ДЗ, необхідно вирішити дві наступні задачі:
    Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);
    Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.
*/

const str1 = prompt("Enter string 1:");
const str2 = prompt("Enter string 2:");
const str3 = prompt("Enter string 3:");

const res1 = str3 + str1 + str2;

console.log(res1);

// Щоб отримати число в діапазоні потрібно Math.random * (max-min+1) + min
const fiveDigitNum = Math.floor(Math.random() * 90000 + 10000);

const res2 = fiveDigitNum.toString().split("").join(" ");

console.log(res2);
