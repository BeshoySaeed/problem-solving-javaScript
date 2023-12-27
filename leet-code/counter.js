var createCounter = function (n) {
  let counter = n;

  function increment() {
    return counter++;
  }
  return increment;
};
