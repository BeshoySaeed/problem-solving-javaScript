function sortArray(array) {
  let oddIndex = [];
  let oddNum = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddIndex.push(i);
      oddNum.push(array[i]);
    }
  }
  oddNum.sort((a, b) => a - b);
  for (let i = 0; i < oddNum.length; i++) {
    array[oddIndex[i]] = oddNum[i];
  }
  return array;
}
console.log(sortArray([5, 3, 1, 8, 0]));
