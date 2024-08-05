// ease way
var kthDistinct = function (arr, k) {
  let distinctObj = {};
  let distinctArr = [];
  for (let i of arr) {
    distinctObj[i] = (distinctObj[i] || 0) + 1;
  }
  for (let i in distinctObj) {
    if (distinctObj[i] === 1) {
      if (k === 1) {
        return i;
      }
      k--;
    }
  }
  return "";
};

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
