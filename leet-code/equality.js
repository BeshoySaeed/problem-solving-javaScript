var isSameTree = function (p, q) {
  if (p.length !== q.length) {
    return false;
  }

  for (let i = 0; i < p.length; i++) {
    if (p[i] !== q[i]) {
      return false;
    }
  }
  return true;
};

console.log(isSameTree([1, 2, 1], [1, 1, 2]));
