"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findFactorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * findFactorial(n - 1);
    }
};
exports.default = findFactorial;
