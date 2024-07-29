function parameter(n) {
  let arr = n.toString();
  let multiple = 1;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    multiple *= Number(arr[i]);
    sum += Number(arr[i]);
  }
  if (multiple == sum) {
    return multiple;
  } else {
    for (let i = 0; i < multiple * sum + (multiple + sum); i++) {
      if (
        Number.isInteger(i / multiple) &&
        Number.isInteger(i / sum) &&
        i != 0
      ) {
        return i;
      }
    }
  }
}

console.log(parameter(344));
