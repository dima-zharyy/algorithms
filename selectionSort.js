arrExample = [5, 6, 55, 2, 1, 65, -56, 5, 45, 8, 55, 4548, 8];

let counter = 0;

const findSmallest = (arr) => {
  let smallestItem = arr[0];
  let smallestItemIndex = 0;

  for (let i = 1; i < arr.length; i += 1) {
    counter++;
    if (arr[i] < smallestItem) {
      smallestItem = arr[i];
      smallestItemIndex = i;
    }
  }

  return smallestItemIndex;
};

const selectionSort = (arr) => {
  const copyArr = [...arr];
  const sortedArr = [];

  while (copyArr.length > 0) {
    counter++;
    const smallestItemIndex = findSmallest(copyArr);
    const smallestItem = copyArr.splice(smallestItemIndex, 1);
    sortedArr.push(smallestItem);
    continue;
  }

  return sortedArr;
};

console.log(selectionSort(arrExample));
console.log(counter);
