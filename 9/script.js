/* 
Написати цикли, які зможуть:
    1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
    2. Вивести квадрати чисел від 10 до 20.
    3. Вивести таблицю множення на 7.
    4. Знайти суму всіх цілих чисел від 1 до 15.
    5. Знайти добуток усіх цілих чисел від 15 до 35.
    6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
    7. Вивести суму лише парних чисел в діапазоні від 30 до 80.
    8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
    9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
    10. Визначити кількість його парних дільників.
    11. Знайти суму його парних дільників.
    12. Надрукувати повну таблицю множення від 1 до 10.
*/

// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
{
  const res = [];

  for (let i = 10; i <= 20; i++) {
    res.push(i);
  }

  const message = `Числа від 10 до 20:\n${res.join(", ")}`;
  console.log(message);
}

// 2. Вивести квадрати чисел від 10 до 20.
{
  const res = [];

  for (let i = 10; i <= 20; i++) {
    const sqrNumber = i ** 2;
    res.push(sqrNumber);
  }

  const message = `Квадрати чисел від 10 до 20:\n${res.join(", ")}`;
  console.log(message);
}

// 3. Вивести таблицю множення на 7.
{
  const res = [];

  for (let i = 1; i <= 10; i++) {
    const str = `7 * ${i} = ${7 * i}`;
    res.push(str);
  }

  const message = `Табличка множення на 7:\n${res.join("\n")}`;
  console.log(message);
}

// 4. Знайти суму всіх цілих чисел від 1 до 15.
{
  let sum = 0;
  for (let i = 1; i <= 15; i++) {
    sum += i;
  }

  console.log("Сума всіх цілих чисел від 1 до 15:", sum);
}

// 5. Знайти добуток усіх цілих чисел від 15 до 35.
{
  let mult = 1;
  for (let i = 15; i <= 35; i++) {
    mult *= i;
  }

  console.log("Добуток усіх цілих чисел від 15 до 35: ", mult.toLocaleString());
}

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
{
  let sum = 0;
  for (let i = 1; i <= 500; i++) {
    sum += i;
  }

  const avg = sum / 500;
  console.log("Середнє арифметичне всіх цілих чисел від 1 до 500:", avg);
}

// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.
{
  let sum = 0;
  for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) sum += i;
  }
  console.log("Сума лише парних чисел в діапазоні від 30 до 80:", sum);
}

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
{
  const res = [];
  for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
      res.push(i);
    }
  }

  const message = res.join(", ");
  console.log("Числа в діапазоні від 100 до 200 кратні 3:\n", message);
}

// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// 10. Визначити кількість його парних дільників.
// 11. Знайти суму його парних дільників.
{
  const numStr = prompt("Введіть натуральне число")?.trim();
  if (numStr === null || !numStr)
    alert("Шкода, що ви не захотіли ввести натуральне число.");
  else if (isNaN(numStr)) alert("Ви ввели не число.");
  else if (!Number.isInteger(+numStr) || +numStr <= 0)
    alert(
      "Натуральні числа — це числа, що виникають природним чином при лічбі (цілі додатні числа)."
    );
  else {
    const divisors = [];
    let amountEvenDivisors = 0;
    let sumEvenDivisors = 0;
    const num = +numStr;

    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisors.push(i);
        if (i % 2 === 0) {
          amountEvenDivisors++;
          sumEvenDivisors += i;
        }
      }
    }

    const messageDivisors = divisors.join(", ");
    console.log(`Дільники числа ${num}:\n`, messageDivisors);
    if (amountEvenDivisors === 0)
      console.log(`У числа ${num} немає парних дільників.`);
    else if (amountEvenDivisors === 1)
      console.log(`У числа ${num} є один парний дільник ${sumEvenDivisors}.`);
    else
      console.log(
        `У числа ${num} є ${amountEvenDivisors} парних дільників. Їх сума ${sumEvenDivisors}`
      );
  }
}

// 12. Надрукувати повну таблицю множення від 1 до 10.
{
  const res = [];

  for (let i = 1; i <= 10; i++) {
    const table = [];
    const tableHead = `Табличка множення на ${i}:`;
    table.push(tableHead);
    for (let j = 1; j <= 10; j++) {
      const str = `${i} * ${j} = ${i * j}`;
      table.push(str);
    }
    res.push(table.join("\n"));
  }

  console.log(res.join("\n\n"));
}
