const isPalindrome = (s) => {
  const str = s.toLowerCase();

  if (str.length && !str.trim()) {
    return true;
  }

  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (
      (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) ||
      (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122) ||
      (str[i].charCodeAt() >= 48 && str[i].charCodeAt() <= 57)
    ) {
      result.push(str[i]);
    }
  }

  const first = result.join("");
  const second = result.reverse().join("");

  return first === second;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
