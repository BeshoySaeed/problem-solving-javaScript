function charCount(str) {
  let result = {};

  //   const nowPer = performance.now();
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (result[char]) {
        result[char]++;
      } else {
        if (typeof char === "string" || typeof char === "number") {
          result[char] = 1;
        }
      }
    }
  }
  //   const nowPer2 = performance.now();
  //   return nowPer2 - nowPer;
  return result;
}
// time take =  0.22439999999999571
console.log(charCount("Hello world of hany 123123"));

function charCount2(str) {
  let result = {};

  //   const first = performance.now();
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      result[char] = ++result[char] || 1;
    }
  }
  //   const second = performance.now();
  //   return second - first;
  return result;
}

// time take = 0.21280000000000143

// less time complexity and space complexity

console.log(charCount2("Hello world of hany 123123"));

// understand it
/*
        return an object with each char with how many times in the sentence as a value
        get one input sentence
        yes can get the object from the sentence
    */
// exapmles
/*
        "aab"  => {a : 2 , b: 1}
    */

function charCount2(str) {
  let result = {};

  const startTime = performance.now(); // Take timestamp before loop

  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }

  const endTime = performance.now(); // Take timestamp after loop

  const executionTime = endTime - startTime; // Calculate execution time
  console.log("Execution time:", executionTime, "milliseconds"); // Log the time

  return result;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 580) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}
console.log(charCount2("Hello world of hany 123123"));
