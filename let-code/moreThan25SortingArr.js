var findSpecialInteger = function (arr) {
  const threshold = arr.length / 4;
  const countMap = new Map();
  for (const num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
    if (countMap.get(num) > threshold) {
      return num;
    }
  }
}; 

console.log(
  findSpecialInteger([1, 1, , 1, 1, 1, 1, 2, 3, 4, 2, 5, 6, 7, 8, 8])
);
