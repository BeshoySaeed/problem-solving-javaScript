function sumZero(arr) {
  // we need to return the first 2 items which sum of them equal 0

  // we can make it with loop or with multiple pointer

  // multiple pointer

  // O(n)

  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  // with nested loop

  // O(n*2)
  for (let i of arr) {
    for (let j of arr) {
      if (i + j === 0) {
        return [i, j];
      }
    }
  }
}

// console.log(sumZero([-5, -4, -3, 0, 1, 2, 3, 4]));

// [11,12,3,4,5,6,7,6,5,4]
function countUniqueValue(arr) {
  let left = 0;
  let right = 1;
  while (right <= arr.length - 1) {
    if (arr[left] !== arr[right]) {
      left++;
      arr[left] = arr[right];
    } else {
      right++;
    }
  }
  return left + 1;
}

console.log(countUniqueValue([1, 1, 1, 1, 1, 2]));
