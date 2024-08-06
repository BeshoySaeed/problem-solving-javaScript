// Linear search

Array.prototype.getItemIndex = function (searchWord) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === searchWord) {
      return i;
    }
  }
  return -1;
};

// console.log(["hello", "bishoy"].getItemIndex("bishoy"));

// Binary search

// assume that the array are already sorted && only numbers

Array.prototype.getItemIndexBinary = function (searchNum) {
  let left = 0;
  let right = this.length - 1;

  while (left <= right) {
    let middle = Math.floor(left + (right - left) / 2);
    if (this[middle] > searchNum) {
      right = middle - 1;
    } else if (this[middle] < searchNum) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
};

// console.log([1, 2, 3, 4, 5, 6].getItemIndexBinary(2));

// naive search

String.prototype.patternExist = function (pattern) {
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (this[i + j] !== pattern[j]) break;
      if (j == pattern.length - 1) return true;
    }
  }
  return false;
};

console.log("lorie loled".patternExist("lol"));
