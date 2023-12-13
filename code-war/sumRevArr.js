function sumOfDifferences(arr) {
  let newarr = arr.reverse();
  let ans = [];
  for (let i = 0; i < newarr.length - 1; i++) {
    ans.push(newarr[i] - newarr[i + 1]);
  }
  return ans;
}

console.log(sumOfDifferences([-3, -4, -5, -5, -4, 3, 4, 0, 2, -3, -7, -2, 1]));
