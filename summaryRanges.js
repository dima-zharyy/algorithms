const summaryRanges = (nums) => {
  const result = [];
  let index = 0;
  result[index] = [nums[0]];

  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] + 1 === nums[i + 1]) {
      continue;
    } else {
      if (i !== 0 && nums[i] - 1 === nums[i - 1]) result[index].push(nums[i]);
      index++;
      result[index] = [nums[i + 1]];
    }
  }

  const output = result.slice(0, result.length - 1).map((item) => {
    if (item.length === 1) {
      return `${item[0]}`;
    } else {
      return `${item[0]}->${item[1]}`;
    }
  });

  return output;
};

summaryRanges([0, 2, 3, 4, 6, 8, 9]);
