const zeroElements = (array, value) => {
  if (!Array.isArray(array)) {
    console.error("Invalid parameters for zeroElements function");
    return;
  }

  for (let index = 0; index < array.length; index++) {
    if (array[index] === value) continue;
    else array[index] = 0;
  }

  return array;
};

export default zeroElements;
