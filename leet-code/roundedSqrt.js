var mySqrt = function (x) {
  if (x <= 0) {
    return null;
  }
  if (x === 0 || x === 1) {
    return x;
  }
  let guess = x / 2; // any number it's not different anyway it'll be iterate
  for (let i = 0; i < 40; i++) {
    guess = (guess + x / guess) / 2;
  }

  return Math.floor(guess);
};

console.log(mySqrt(2147395599));
