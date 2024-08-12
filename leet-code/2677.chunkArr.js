var chunk = function (arr, size) {
  let res = [];
  const arrayLength = arr.length;
  for (let i = 0; i < arrayLength; i += size) {
    const newArr = arr.splice(0, size);
    res.push(newArr);
  }
  if (arr.length) res.push(arr);
  return res;
};

console.log(chunk([1, 2, 3, 4, 5], 1));
