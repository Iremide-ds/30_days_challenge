const removeDups = (arr: any[]) => {
  if (arr.length == 1) {
    return arr;
  } else {
    let cleanArr: any[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (cleanArr.includes(arr[i])) {
        continue;
      } else {
        cleanArr.push(arr[i]);
      }
    }
    return cleanArr;
  }
};

export default removeDups;
