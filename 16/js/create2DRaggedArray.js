const create2DRaggedArray = () => {
  const rows = +prompt("Введіть довжину масиву");

  if (!Number.isInteger(rows)) {
    console.error("Invalid rows for create2DArray function");
    return;
  }

  return Array.from({ length: rows }, (_, i) => {
    const col = +prompt(`Введіть довжину ${i + 1} підмасиву`);
    if (!Number.isInteger(col)) {
      console.error("Invalid column for create2DArray function");
      return;
    }
    return Array.from({ length: col }, (_, j) =>
      prompt(`Введіть елемент з індексом [${i}, ${j}]:`)
    );
  });
};

export default create2DRaggedArray;
