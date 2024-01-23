const minElement = (array = []) => {
  if (!Array.isArray(array)) {
    console.error("Invalid parameters for minElement function");
    return;
  }

  return array.reduce(
    (min, element) => (min > element ? element : min),
    array[0]
  );
};

export default minElement;
