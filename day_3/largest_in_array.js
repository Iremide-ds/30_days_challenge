"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkForLargestNumber = (anyArray) => {
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
