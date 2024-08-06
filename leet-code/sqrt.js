var mySqrt = function (x) {
  if (x <= 0) {
    return null;
  }
  if (x === 0 || x === 1) {
    return x;
  }
  let guess = x / 2; // any number it's not different anyway it'll be iterate
  for (let i = 0; i < 30; i++) {
    guess = (guess + x / guess) / 2;
  }

  return Math.floor(guess);
};

// console.log(mySqrt(4));

// another way

var mySqrt2 = function (x) {
  if (x <= 0) {
    return null;
  }
  if (x === 0 || x === 1) {
    return x;
  }
  for (let i = 1; i <= x; i++) {
    let sqrNum = i * i;
    if (sqrNum > x) {
      return i - 1;
    }
  }
};

// console.log(mySqrt2(2));

// Binary search way

var mySqrt3 = function (x) {
  if (x <= 0) {
    return null;
  }
  if (x === 0 || x === 1) {
    return x;
  }
  let m = Math.floor(x / 2);
  if (m ** 2 === x) return m;

  if (m ** 2 < x) {
    for (let i = m + 1; i <= x; i++) {
      let sqrNum = i * i;
      if (sqrNum > x) {
        return i - 1;
      }
    }
  }

  if (m ** 2 > x) {
    for (let i = 1; i <= m; i++) {
      let sqrNum = i * i;
      if (sqrNum > x) {
        return i - 1;
      }
    }
  }
};

// console.log(mySqrt3(6));

// with multiple pointer

var mySqrt4 = function (x) {
  if (x <= 0) {
    return null;
  }
  if (x === 0 || x === 1) {
    return x;
  }
  let left = 0;
  let right = x;
  let res;
  while (left <= right) {
    let m = Math.floor(left + (right - left) / 2);
    console.log(m);
    if (m ** 2 < x) {
      left = m + 1;
      res = m;
    } else if (m ** 2 > x) {
      right = m - 1;
    } else {
      return m;
    }
  }

  return res;
};

console.log(mySqrt4(8));
