function stray(numbers) {
  let sortArr = numbers.sort((a, b) => a - b);
  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i] !== sortArr[i - 1] && sortArr[i] !== sortArr[i + 1]) {
      return sortArr[i];
    }
  }
}

console.log(stray([1, 2, 2, 2]));
