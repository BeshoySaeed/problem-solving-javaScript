// without sliding pattern

function maxSubArr(arr, num) {
  const start = performance.now();
  if (num > arr.length) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let indexSum = 0;
    for (let j = 0; j < num; j++) {
      indexSum += arr[i + j];
    }
    if (indexSum > max) max = indexSum;
  }
  const end = performance.now();
  console.log("time taken O(N * 2): ", end - start);
  return max;
}

console.log(maxSubArr([1, 2, 3, 5, 9, 7, 5, 1, 2], 3));

// with sliding pattern

function maxSumWithSliding(arr, num) {
  const start = performance.now();

  if (num > arr.length) return null;

  let max = 0;
  let current = 0;

  for (let i = 0; i < num; i++) {
    current += arr[i];
  }
  max = Math.max(max, current);

  for (let i = num; i < arr.length; i++) {
    current = current - arr[i - num] + arr[i];
    max = Math.max(max, current);
  }
  const end = performance.now();
  console.log("time taken O(N * 2): ", end - start);
  return max;
}
console.log(maxSumWithSliding([1, 2, 3, 5, 9, 7, 5, 1, 2], 3));
