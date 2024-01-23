const findNumberOfElements = (array, condition) => {
  if (!Array.isArray(array)) {
    console.error("Invalid parameters for findNumberOfElements function");
    return;
  }

  if (typeof condition !== "function") return array.length;

  return array.reduce(
    (number, element) => (condition(element) ? number + 1 : number),
    0
  );
};

export default findNumberOfElements;
