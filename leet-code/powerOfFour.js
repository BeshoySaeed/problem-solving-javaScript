var isPowerOfFour = function (n) {
  let x = 0;
  function helper() {
    if (4 ** x === n) return true;
    if (4 ** x > n) return false;
    if (4 ** x < n) {
      x++;
      return helper();
    }
  }
  return helper();
};

console.log(isPowerOfFour(16));

// var isPowerOfFour = function (n) {
//   if (n <= 0) return false;

//   while (n % 4 === 0) {
//     n /= 4;
//   }

//   return n === 1;
// };
