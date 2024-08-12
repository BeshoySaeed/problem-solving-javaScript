var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    let results = new Array(functions.length);
    let iteratedIndex = 0;

    functions.forEach((fn, index) => {
      fn()
        .then((res) => {
          results[index] = res;
          iteratedIndex++;
          if (iteratedIndex == functions.length) resolve(results);
        })
        .catch((err) => {
          reject(err);
          return;
        });
    });
  });
};
