const isValidClosing = (str) => {
  const brackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  if (str.length === 1 || str.length === 0) {
    return false;
  }

  const stack = [];

  for (const bracket of str) {
    console.log(stack);
    if (brackets[bracket]) {
      stack.push(brackets[bracket]);
    } else if (bracket !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0 ? true : false;
};

console.log(isValidClosing("({["));
console.log(isValidClosing("({[]})"));
console.log(isValidClosing("(((((())))))"));
