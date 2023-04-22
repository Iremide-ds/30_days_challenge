const reverseString = (str: string): string => {
  const splited = str.split("");

  const reversed = splited.reverse();

  return reversed.join("");
};
