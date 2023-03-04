const checkForLargestNumber = (anyArray: Number[]) => {
  let largestNum: Number = 0;
  anyArray.forEach((value: Number, index: number, array: Number[]) => {
    if (index === 0) {
      largestNum = value;
    } else {
      if (value > largestNum) {
        largestNum = value;
      }
    }
  });
  return largestNum;
};

export default checkForLargestNumber;