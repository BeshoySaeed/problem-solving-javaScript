var isPowerOfThree = function (n) {
  let x = 0;
  function helper() {
    if (3 ** x === n) return true;
    if (3 ** x > n) return false;
    if (3 ** x < n) {
      x++;
      return helper();
    }
  }
  return helper();
};

console.log(isPowerOfThree(16));
