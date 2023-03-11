const checkForSecondLargestNumber = (anyArray: Number[]) => {
  if (anyArray.length < 2) {
    return "Array not long enough!";
  }
  anyArray.sort();
  let largestNum: Number = anyArray[anyArray.length - 2];
  return largestNum;
};

export default checkForSecondLargestNumber;
