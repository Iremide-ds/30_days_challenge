import sumAllElements from "../day_8/sum_all_elements";

const findAverage = (arr: number[]) => {
  let sum = sumAllElements(arr);

  return sum / arr.length;
};

export default findAverage;
