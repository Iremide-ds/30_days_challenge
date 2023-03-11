"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkForSecondLargestNumber = (anyArray) => {
    if (anyArray.length < 2) {
        return "Array not long enough!";
    }
    anyArray.sort();
    let largestNum = anyArray[anyArray.length - 2];
    return largestNum;
};
exports.default = checkForSecondLargestNumber;
