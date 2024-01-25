const create2DArray = () => {
  const rows = +prompt("Введіть довжину масиву");
  const cols = +prompt("Введіть довжину підмасивів");

  if (!Number.isInteger(rows) || !Number.isInteger(cols)) {
    console.error("Invalid parametrs for create2DArray function");
    return;
  }

  return Array.from({ length: rows }, (_, i) =>
    Array.from({ length: cols }, (_, j) =>
      prompt(`Введіть елемент з індексом [${i}, ${j}]:`)
    )
  );
};

export default create2DArray;
