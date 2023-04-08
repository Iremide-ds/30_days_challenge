const sumAllElements = (arr: any[]) => {
    let sum;
    for (let i = 0; i < arr.length; i++) {
        if (i === 0){
            sum = arr[i];
        }else {
            sum = sum + arr[i];
        }
    }
    return sum;
}

export default sumAllElements;