"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const factorial_1 = __importDefault(require("./day_1/factorial"));
const palindrome_1 = __importDefault(require("./day_2/palindrome"));
//day one
console.log((0, factorial_1.default)(10));
//day two
const randomStr = "met";
console.log(`${randomStr} is a palindrome? ` + (0, palindrome_1.default)(randomStr));
