// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

const isHappy = (n) => {
  let num = String(n)
    .split("")
    .reduce((acc, number) => acc + Math.pow(number, 2), 0);

  if (num >= 7) {
    return isHappy(num);
  }

  return num === 1;
};

console.log(isHappy(19));
console.log(isHappy(1));
console.log(isHappy(7));
console.log(isHappy(1111111));
console.log(isHappy(325));
