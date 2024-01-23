const createArr = (length) => {
  if (isNaN(length) || length < 0) {
    console.error("Invalid parameter for createArr function");
    return;
  }
  const array = [];
  for (let index = 0; index < length; index++) {
    const element = prompt(`Введіть ${index + 1}-й елемент масиву (число)`);

    isNaN(+element) ? array.push(0) : array.push(+element);
  }

  return array;
};

export default createArr;
