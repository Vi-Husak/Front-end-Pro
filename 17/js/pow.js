const pow = (num, degree) => {
  if (degree < 0) {
    throw new Error("Exponent must be a non-negative integer");
  }

  if (degree === 0) return 1;

  if (degree % 2 === 0) {
    const halfPow = pow(num, degree / 2);
    return halfPow * halfPow;
  } else return num * pow(num, degree - 1);
};

export default pow;
