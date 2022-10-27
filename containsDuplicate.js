const containsDuplicate = (nums) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return true;
    map.set(nums[i], 2);
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));

const containsDuplicate_2 = (nums) => {
  const set = new Set(nums);
  return set.size !== nums.length;
};

console.log(containsDuplicate_2([1, 2, 3]));
