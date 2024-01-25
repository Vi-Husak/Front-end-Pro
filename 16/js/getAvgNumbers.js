const getAvgNumbers = (array) => {
  if (!Array.isArray(array)) {
    console.error("Invalid parameters for getAvgNumbers function");
    return;
  }

  let sum = 0,
    count = 0;
  for (const element of array) {
    if (typeof element === "number") {
      sum += element;
      count += 1;
    }
  }

  return count > 0 ? sum / count : 0;
};

export default getAvgNumbers;
