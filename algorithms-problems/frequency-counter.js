/* reqyurements
    1- return true or false
    2- second array ust have the same length of the first with multiplicates values
    3- example [1, 2 , 3] second should be [1 , 9 , 4]
    4- we will solve it with two patter array case with nested loop and frequency counter based object with n't nested
    5- array will O(n*2)    frequency O(n)
*/

// Frequency based

function sameWithFrequency(first, second) {
  const startTime = performance.now();
  if (first.length != second.length) return false;

  let firstObj = {};
  // let secondObj = {};
  for (let num of first) {
    firstObj[num] = (firstObj[num] || 0) + 1;
  }
  // for (let num of second) {
  //   secondObj[num] = (secondObj[num] || 0) + 1;
  // }
  console.log("first object ..", firstObj);
  // console.log("second object ..", secondObj);
  for (let num of second) {
    if (!firstObj[Math.sqrt(num)]) {
      return false;
    } else {
      firstObj[Math.sqrt(num)] -= 1;
    }
    // if (firstObj[num] !== secondObj[num ** 2]) {
    //   return false;
    // }
  }
  console.log(firstObj);
  const endTime = performance.now();
  const operationsTime = endTime - startTime;
  console.log("operations time..", operationsTime);
  return true;
}

// 8.791600000000003   time taken with frequency
// 8.631500000000003   time taken with frequency with just one object
console.log(sameWithFrequency([1, 2, 3], [1, 4, 9]));

// array based

function sameWithArr(first, second) {
  const startTime = performance.now();
  if (first.length != second.length) return false;

  for (let num of first) {
    const index = second.indexOf(num ** 2);
    if (index === -1) {
      return false;
    }
    console.log(first);
    console.log(second);
    second.splice(index, 1);
  }
  const endTime = performance.now();
  const operationTime = endTime - startTime;
  console.log("operation time..", operationTime);
  return true;
}

// 9.058000000000007

// console.log(sameWithFrequency([1, 2, 3], [1, 4, 9]));

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let lookup = {};

  for (let i of str1) {
    lookup[i] = (lookup[i] || 0) + 1;
  }

  for (let i of str2) {
    if (!lookup[i]) {
      return false;
    } else {
      lookup[i]--;
    }
  }
  return true;
}

// console.log(isAnagram("a", "ab"));
