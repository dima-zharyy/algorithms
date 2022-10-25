const findUniqueNum = (nums) => {
  const match = new Map();

  nums.forEach((num) => {
    if (match.has(num)) {
      match.delete(num);
    } else {
      match.set(num, num);
    }
  });

  return match.values().next().value;
};

console.log(findUniqueNum([2, 1, 3, 2, 1, 3, 5]));
