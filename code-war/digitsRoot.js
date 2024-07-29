function digitalRoot(n) {
  let arrOfN = n.toString().split("");
  while (arrOfN.length > 1) {
    arrOfN = arrOfN
      .reduce((acc, current) => +acc + +current)
      .toString()
      .split("");
  }
  return parseInt(arrOfN[0]);
}

console.log(digitalRoot(284));
