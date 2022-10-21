const factorial = (num) => {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

console.log(factorial(5));

const fibo = (num) => {
  if (num <= 2) {
    return 1;
  } else {
    return fibo(num - 1) + fibo(num - 2);
  }
};

console.log(fibo(8));
