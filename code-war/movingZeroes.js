function moveZeros(arr) {
  let arrNoZero = arr.filter((x) => x !== 0);
  let arrZero = arr.filter((x) => x === 0);
  return [...arrNoZero, ...arrZero];
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
