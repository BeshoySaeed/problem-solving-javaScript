function highAndLow(numbers) {
  let arr = numbers.split(" ");
  let numArr = arr.map((x) => Number(x));
  return `${Math.max(...numArr)} ${Math.min(...numArr)}`;
}

console.log(highAndLow("1 2 4 5 6"));
