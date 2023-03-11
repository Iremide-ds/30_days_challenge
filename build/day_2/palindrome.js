"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkPalindrome = (anyStr) => {
    const charArray = anyStr.split("");
    charArray.reverse();
    const reversedStr = charArray.join("");
    return reversedStr === anyStr;
};
exports.default = checkPalindrome;
