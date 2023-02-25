const findFactorial = (n: number): number => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * findFactorial(n - 1);
  }
};

export default findFactorial;
