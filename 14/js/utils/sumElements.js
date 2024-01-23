const sumElements = (array, condition) => {
  if (!Array.isArray(array)) {
    console.error("Invalid parameters for sumElements function");
    return;
  }

  if (typeof condition !== "function")
    return array.reduce((sum, element) => sum + element, 0);

  return array.reduce(
    (sum, element) => (condition(element) ? sum + element : sum),
    0
  );
};

export default sumElements;
