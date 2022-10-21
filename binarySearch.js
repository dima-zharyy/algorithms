const arr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const binarySearch = function (arr, item) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let middle = Math.floor((high + low) / 2);

    if (arr[middle] === item) {
      return `Index of the element is ${middle}`;
    }

    if (arr[middle] > item) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return "Item is not found in the Array";
};
console.log(arr[0]);
console.log(binarySearch(arr, 2));
