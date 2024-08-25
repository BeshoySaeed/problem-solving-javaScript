var inorderTraversal = function* (arr) {
  for (let n of arr) {
    if (Array.isArray(n)) {
      yield* inorderTraversal(n);
    } else {
      yield n;
    }
  }
};
