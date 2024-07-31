function areThereDuplicates() {
  let left = 0;
  let right = 1;
  while (right <= arguments.length) {
    if (arguments[left] !== arguments[right]) {
      left++;
      arguments[left] = arguments[right];
      right++;
    } else {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 34, 5, 6, 6));
