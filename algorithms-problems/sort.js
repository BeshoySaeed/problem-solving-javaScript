let arr = [9, 7, 2, 6, 4];
let arrStr = ["steele", "Colt", "Data Structure", "Algorithms"];

// bubble sort BIG O (n ** 2)

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

// console.log(arr.bubbleNumber());

// Selection BIG O (n ** 2)

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) lowest = j;
    }
    [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    console.log("new arr", arr);
  }
  return arr;
}

// console.log(selectionSort([34, 22, 10, 19, 17]));

// Insertion sort BIG O (n ** 2)

// function insertionSor(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i - 1; j >= 0; j--) {
//       if (arr[i] < arr[j]) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         i--;
//       }
//     }
//   }
//   return arr;
// }

// enhanced code but still working on it
function insertionSor(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

// console.log(insertionSor([34, 22, 10, 19, 17]));
// merge sort BIG O (n log n)

function merge(arr1, arr2) {
  let firstFor = 0;
  let secondFor = 0;
  let result = [];
  while (firstFor < arr1.length && secondFor < arr2.length) {
    if (arr1[firstFor] < arr2[secondFor]) {
      result.push(arr1[firstFor]);
      firstFor++;
    } else {
      result.push(arr2[secondFor]);
      secondFor++;
    }
  }
  if (firstFor < arr1.length) {
    result = result.concat(arr1.slice(firstFor));
  }
  if (secondFor < arr2.length) {
    result = result.concat(arr2.slice(secondFor));
  }
  return result;
}

// console.log(merge([1, 10, 50], [2, 14, 99, 100]));

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// console.log(
//   Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 1000000)),
//   mergeSort(Array.from({ length: 1000000 }, () => Math.random() * 1000000))
// );

// quick sort

// make  pivot function
function helper(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIndex = start;

  for (i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }

  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
  return swapIndex;
}

// console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = helper(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

// Radix sort
// we just compare the numbers as a digits not compare it with another like all the previous sort

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  // return Math.floor(Math.log10(Math.abs(num))) + 1;
  counter = 0;
  while (num > 1) {
    counter++;
    num = num / 10;
  }
  return counter;
}

function mostDigit(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, digitCount(nums[i]));
  }
  return max;
}

function radixSort(nums) {
  let maxDigitCount = mostDigit(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}
console.log(radixSort([1, 5, 234, 535, 64765, 765868, 9]));
