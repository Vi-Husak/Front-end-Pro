/* 
Дан масив об'єктів. Вивести масив телефонних номерів користувачів, у яких баланс більше 2000 доларів. І знайти суму всіх балансів користувачів
let users = [
    {
        "index": 0,
        "isActive": true,
        "balance": "$2,226.60",
        "name": "Eugenia Sawyer",
        "gender": "female",
        "phone": "+1 (840) 583-3207",
        "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    ... 
]
*/
import { users } from "./data.js";
import getPhoneNumbers from "./getPhoneNumbers.js";
import sumBalance from "./sumBalance.js";

const isBalanceMore = (balance, amount) => {
  const balanceNumber = parseFloat(balance?.replace(/[^0-9.-]+/g, ""));
  return !isNaN(balanceNumber) && balanceNumber > amount;
};

console.log(
  getPhoneNumbers(users, ({ balance }) => isBalanceMore(balance, 2000))
);

console.log(getPhoneNumbers(users));

console.log(sumBalance(users));
