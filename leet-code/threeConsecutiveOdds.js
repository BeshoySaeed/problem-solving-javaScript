var threeConsecutiveOdds = function (arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0)
      return true;
  }
  return false;
};

// enhancement version
var threeConsecutiveOdds = function (arr) {
  let count = 0;
  for (const ele of arr) {
    if (ele % 2 === 1) {
      count++;
      if (count === 3) return true;
    } else {
      count = 0;
    }
  }
  return false;
};

console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));
