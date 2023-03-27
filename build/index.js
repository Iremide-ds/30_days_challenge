"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const factorial_1 = __importDefault(require("./day_1/factorial"));
const palindrome_1 = __importDefault(require("./day_2/palindrome"));
const largest_in_array_1 = __importDefault(require("./day_3/largest_in_array"));
const second_largest_1 = __importDefault(require("./day_4/second_largest"));
const check_prime_number_1 = __importDefault(require("./day_5/check_prime_number"));
const sort_array_1 = __importDefault(require("./day_6/sort_array"));
//day one
console.log((0, factorial_1.default)(10));
//day two
const randomStr = "met";
console.log(`${randomStr} is a palindrome? ` + (0, palindrome_1.default)(randomStr));
//day three
const randArr = [1, 2, 3, 4, 5, 9, 7, 6];
console.log((0, largest_in_array_1.default)(randArr));
//day four
console.log((0, second_largest_1.default)(randArr));
//day five
console.log((0, check_prime_number_1.default)(1));
//day six
console.log((0, sort_array_1.default)(["gut", "keg", "ant"]));
