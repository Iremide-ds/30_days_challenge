const isPrimeNumber = (num: number) => {
    const remainder = num % 2;

    if (remainder === 0) {
        return false;
    }else {
        return true;
    }
};

export default isPrimeNumber;