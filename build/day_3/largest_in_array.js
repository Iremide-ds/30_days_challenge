"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkForLargestNumber = (anyArray) => {
    if (anyArray.length < 2) {
        return anyArray[0] || 'Array not long enough!';
    }
    let largestNum = 0;
    anyArray.forEach((value, index, array) => {
        if (index === 0) {
            largestNum = value;
        }
        else {
            if (value > largestNum) {
                largestNum = value;
            }
        }
    });
    return largestNum;
};
exports.default = checkForLargestNumber;
