function persistence(num) {
  let count = 0;
  if (num < 10) {
    return 0;
  } else {
    const digits = String(num).split("");
    const product = digits.reduce((acc, digit) => acc * digit, 1);
    return 1 + persistence(product);
  }
}
console.log(persistence(2));
