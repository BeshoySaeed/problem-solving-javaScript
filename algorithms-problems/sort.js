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

// console.log(arr.bubbleNumber());

// Selection

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

// Insertion sort

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
// merge sort

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

console.log(
  Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 1000000)),
  mergeSort(Array.from({ length: 1000000 }, () => Math.random() * 1000000))
);
