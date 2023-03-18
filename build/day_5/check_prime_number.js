"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isPrimeNumber = (num) => {
    const remainder = num % 2;
    if (remainder === 0) {
        return false;
    }
    else {
        return true;
    }
};
exports.default = isPrimeNumber;
