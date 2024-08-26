var fibGenerator = function* () {
  let n1 = 0;
  let n2 = 1;
  yield n1;
  yield n2;
  while (true) {
    let next = n1 + n2;
    n1 = n2;
    n2 = next;
    yield next;
  }
};

/*
    var fibGenerator = function*() {
        let a = 0;
        let b = 1;
        while (true) {
            yield a;
            let temp = b;
            b = b + a;
            a = temp;
        }
    };
*/
console.log(fibGenerator().next());
