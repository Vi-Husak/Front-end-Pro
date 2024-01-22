/* 
Написати цикли, які роблять наступне:
    Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
    Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
    Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
    Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
    Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий степінь. 
        (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
*/

{
  const arr = [];
  for (let i = 20; i <= 30; i += 0.5) {
    arr.push(i);
  }

  const message = `Числа від 20 до 30 з кроком 0,5:\n${arr.join(" ")}`;
  console.log(message);
}

{
  const arr = [];
  const dollarExchange = 27;

  for (let dollars = 10; dollars <= 100; dollars += 10) {
    const hryvnias = dollars * dollarExchange;
    const str = `${dollars} доларів коштують ${hryvnias} гривень.`;
    arr.push(str);
  }

  const message = `Обмін валют:\n${arr.join("\n")}`;
  console.log(message);
}

{
  const numStr = prompt("Введіть ціле додатнє число")?.trim();
  if (numStr === null || !numStr)
    alert("Шкода, що ви не захотіли ввести число");
  else if (isNaN(numStr) || Math.floor(numStr) <= 0)
    alert("Ви неправильно ввели число");
  else {
    const number = Math.floor(numStr);
    const numsArr = [];
    for (let i = 1; i <= 100; i++) {
      const iSqr = i ** 2;

      if (iSqr <= number) {
        numsArr.push(i);
      } else break;
    }

    const message = `Числа від 1 до 100, квадрат яких не перевищує число ${number}:\n${numsArr.join(
      " "
    )}`;
    console.log(message);
  }
}

{
  const isPrime = (number) => {
    if (number === 2 || number === 3) return true;
    if (number <= 1 || number % 2 === 0 || number % 3 === 0) return false;
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    return true;
  };

  const numStr = prompt("Введіть число")?.trim();
  if (numStr === null || !numStr)
    alert("Шкода, що ви не захотіли ввести число");
  else if (isNaN(numStr)) alert("Ви неправильно ввели число");
  else {
    const message = isPrime(+numStr)
      ? `Число ${numStr} є простим`
      : `Число ${numStr} не є простим`;

    console.log(message);
  }
}

{
  const isThreeExp = (number) => {
    if (number < 3) return false;
    else {
      while (number % 3 === 0) {
        number /= 3;

        if (number === 1) return true;
      }
    }

    return false;
  };

  const numStr = prompt("Введіть число")?.trim();
  if (numStr === null || !numStr)
    alert("Шкода, що ви не захотіли ввести число");
  else if (isNaN(numStr)) alert("Ви неправильно ввели число");
  else {
    const message = isThreeExp(+numStr)
      ? `Число ${numStr} можна одержати шляхом зведення числа 3 у деякий степінь`
      : `Число ${numStr} не можна одержати шляхом зведення числа 3 у деякий степінь`;

    console.log(message);
  }
}
