function arrayDiff(a, b) {
  let ans = [];
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      ans.push(a[i]);
    }
  }
  return ans;
}

console.log(arrayDiff([1, 2, 3, 4], [2, 3, 6]));
