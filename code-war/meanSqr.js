var solution = function (firstArray, secondArray) {
  let comArr = [];
  let ans = 0;
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] >= secondArray[i]) {
      comArr.push(firstArray[i] - secondArray[i]);
    } else {
      comArr.push(secondArray[i] - firstArray[i]);
    }
  }
  for (let i = 0; i < comArr.length; i++) {
    ans += comArr[i] * comArr[i];
  }
  return ans / comArr.length;
};
