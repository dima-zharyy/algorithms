// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

const addDigits = (num) => {
  if (num < 10) {
    return num;
  } else {
    const nums = String(num).split("");
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
      result += +nums[i];
    }

    return addDigits(result);
  }
};

console.log(addDigits(38));
