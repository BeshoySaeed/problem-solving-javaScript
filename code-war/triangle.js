function sumTriangularNumbers(n) {
  let sum = 0;
  let arrSum = [];
  for (let i = 1; i <= n; i++) {
    sum += i;
    arrSum.push(sum);
  }
  return arrSum.reduce((acc, current) => acc + current, 0);
}

console.log(sumTriangularNumbers(4));
