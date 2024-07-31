function sameFrequency(first, second) {
  let firstInp = first + "";
  let secondInp = second + "";

  if (firstInp.length !== secondInp.length) {
    return false;
  }

  for (let i = 0; i < firstInp.length; i++) {
    const index = secondInp.indexOf(firstInp[i]);
    if (index === -1) {
      return false;
    } else {
      secondInp = secondInp.slice(0, index) + secondInp.slice(index + 1);
    }

    return true;
  }
}
console.log(sameFrequencyCount(123, 123)); // true
console.log(sameFrequencyCount(123, 321)); // true
console.log(sameFrequencyCount(123, 322)); // false

// with frequency counter

function sameFrequencyCount(first, second) {
  let firstInp = first + "";
  let secondInp = second + "";
  let firstObj = {};
  let secondObj = {};

  if (firstInp.length !== secondInp.length) {
    return false;
  }

  for (let i = 0; i < firstInp.length; i++) {
    firstObj[firstInp[i]] = (firstObj[firstInp[i]] || 0) + 1;
  }
  for (let i = 0; i < secondInp.length; i++) {
    secondObj[secondInp[i]] = (secondObj[secondInp[i]] || 0) + 1;
  }

  for (let i = 0; i < firstInp.length; i++) {
    if (firstObj[firstInp[i]] !== secondObj[firstInp[i]]) {
      return false;
    }
  }
  return true;
}
