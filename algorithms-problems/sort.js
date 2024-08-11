let arr = [9, 7, 2, 6, 4];
let arrStr = ["steele", "Colt", "Data Structure", "Algorithms"];

// bubble sort

Array.prototype.bubbleNumber = function () {
  let array = this;
  var noSwaps;
  for (let i = array.length; i > 0; i--) {
    noSwaps = true;
    console.log("main num", i);
    for (let j = 0; j < i - 1; j++) {
      console.log("array", array, array[j], array[j + 1]);
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array;
};

console.log(arr.bubbleNumber());
