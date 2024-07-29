var uniqueInOrder = function (iterable) {
  let arr = [];
  if (iterable.length > 0) {
    arr.push(iterable[0]);
    for (let i = 1; i < iterable.length; i++) {
      if (iterable[i] != iterable[i - 1]) {
        arr.push(iterable[i]);
      } else {
      }
    }
    return arr;
  } else {
    return [];
  }
};
console.log(uniqueInOrder("AAAABBBCCDAABBB"));
