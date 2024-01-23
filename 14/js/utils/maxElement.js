const maxElement = (array = []) => {
  if (!Array.isArray(array)) {
    console.error("Invalid parameters for maxElement function");
    return;
  }

  return array.reduce(
    (max, element) => (max < element ? element : max),
    array[0]
  );
};

export default maxElement;
