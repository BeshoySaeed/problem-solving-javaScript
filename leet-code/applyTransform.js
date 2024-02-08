var map = function (arr, fn) {
  for (let j = 0; j < arr.length; j++) {
    arr[j] = fn(arr[j], j);
  }
  return arr;
};
