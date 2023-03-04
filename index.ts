import findFactorial from "./day_1/factorial";
import checkPalindrome from "./day_2/palindrome";
import findHighestNum from "./day_3/largest_in_array";

//day one
console.log(findFactorial(10));

//day two
const randomStr = "met";
console.log(`${randomStr} is a palindrome? ` + checkPalindrome(randomStr));

//day three
const randArr = [1, 2, 3, 4, 5, 9, 7, 6];
console.log(findHighestNum(randArr));
