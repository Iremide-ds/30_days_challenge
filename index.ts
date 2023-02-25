import findFactorial from "./day_1/factorial";
import checkPalindrome from "./day_2/palindrome";

//day one
console.log(findFactorial(10));

//day two
const randomStr = "met";
console.log(`${randomStr} is a palindrome? ` + checkPalindrome(randomStr));
