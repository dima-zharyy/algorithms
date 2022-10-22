const numsArr = [40, 3, 7, 10, 22, 1, 20, 7, 10];

const recursionGetSum = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  const copy = [...arr];
  const lastIndexValue = copy.pop();
  return lastIndexValue + recursionGetSum(copy);
};

const recursionGetElsQuantity = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  const copy = [...arr];
  copy.pop();
  return 1 + recursionGetElsQuantity(copy);
};

const recursionGetBiggestNum = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }

  const copy = [...arr];
  const last = copy.pop();
  let isLastBiggest = true;

  for (const num of copy) {
    if (num > last) {
      isLastBiggest = false;
    }
  }

  if (isLastBiggest) {
    return last;
  } else {
    return recursionGetBiggestNum(copy);
  }
};

let counter = 0;

const quickSort = (arr) => {
  if (arr.length < 2) return arr;

  const base = arr[Math.floor(arr.length / 2)];
  const copy = [...arr];
  copy.splice(Math.floor(arr.length / 2), 1);
  const lessArr = [];
  const greaterArr = [];

  for (let i = 0; i < copy.length; i++) {
    counter++;
    if (arr[i] >= base) {
      greaterArr.push(arr[i]);
    } else {
      lessArr.push(arr[i]);
    }
  }

  return [...quickSort(lessArr), base, ...quickSort(greaterArr)];
};

console.log(recursionGetSum(numsArr));
console.log(recursionGetElsQuantity(numsArr));
console.log(recursionGetBiggestNum(numsArr));
console.log(quickSort(numsArr));
console.log(counter);
