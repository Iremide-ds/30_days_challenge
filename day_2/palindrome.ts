const checkPalindrome = (anyStr: string): boolean => {
  const charArray = anyStr.split("");
  charArray.reverse();
  const reversedStr = charArray.join("");

  return reversedStr === anyStr;
};

export default checkPalindrome;
