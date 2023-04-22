"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reverseString = (str) => {
    const splited = str.split("");
    const reversed = splited.reverse();
    return reversed.join("");
};
exports.default = reverseString;
