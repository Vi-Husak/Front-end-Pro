const doMath = (x, znak, y) => {
  if (!isNaN(x) && !isNaN(y)) {
    switch (znak) {
      case "+":
        return +x + +y;
      case "-":
        return x - y;
      case "*":
        return x * y;
      case "/":
        return x / y;
      case "%":
        return x % y;
      case "^":
        return x ** y;

      default:
        break;
    }
  }
};

export default doMath;
