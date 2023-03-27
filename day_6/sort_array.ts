const sortAsc = (arr: any[]) => {
  if (arr.length < 2) {
    return [];
  }
  return arr.sort((a, b) => {
    if (typeof a == "number" && typeof b == "number") {
      return a - b;
    } else {
      return a > b ? 1 : -1;
    }
  });
};

export default sortAsc;
