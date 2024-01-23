const multElements = (array, condition) => {
  if (!Array.isArray(array)) {
    console.error("Invalid parameters for multElements function");
    return;
  }

  if (typeof condition !== "function")
    return array.reduce((mult, element) => mult * element, 1);

  return array.reduce(
    (mult, element) => (condition(element) ? mult * element : mult),
    1
  );
};

export default multElements;
