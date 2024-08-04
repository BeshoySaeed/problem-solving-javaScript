function isPowerOfTwo(n) {
  if (n <= 0 || !Number.isInteger(n)) {
    return false;
  }
  while (n > 1) {
    n = n / 2;
  }

  return n === 1;
}

// we can also do it with recursive.