// function splitAndMerge(string, separator) {
//   return string
//     .split(" ")
//     .map((x) => x.split("").join(`${separator}`))
//     .join(" ");
// }

// console.log(splitAndMerge("hey every one", "_"));

// smiled faces

// function countSmileys(arr) {
//   let counter = 0;
//   for (let i of arr) {
//     if (i.match(/^[:|;][-|~]?[\)|D]$/)) {
//       counter++;
//     }
//   }
//   return counter;
// }

// console.log(countSmileys([":-)", ";~D", ":-D", ":_D"]));

// function zeroPlentiful(arr) {
//   let zeroCounter = 0;
//   let groupNumber = 0;
//   let returnZero = false;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 0) {
//       zeroCounter++;
//     } else {
//       if (zeroCounter >= 4) {
//         groupNumber++;
//       } else if (zeroCounter > 0 && zeroCounter < 4) {
//         returnZero = true;
//       }
//       zeroCounter = 0;
//     }
//   }
//   if (zeroCounter >= 4) {
//     groupNumber++;
//   } else if (zeroCounter > 0 && zeroCounter < 4) {
//     returnZero = true;
//   }
//   if (returnZero) {
//     return 0;
//   } else {
//     return groupNumber;
//   }
// }

// console.log(zeroPlentiful([0, 0, 0, 0, 1, 0]));

// -----------------------------------------------

// function narcissistic(value) {
//   let powerNumber = value.toString().length;
//   let stringForValue = value
//     .toString()
//     .split("")
//     .map((x) => x ** powerNumber)
//     .reduce((acc, current) => acc + current);

//   if (stringForValue == value) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(narcissistic(153));

// ---------------------------------------------

// String.prototype.toJadenCase = function () {
//   return this.split(" ")
//     .map((x) => x[0].toUpperCase() + x.slice(1))
//     .join(" ");
// };

// let str = "hey every one";

// console.log(str.toJadenCase());

// ---------------------------[]

// function findOdd(A) {
//   let obj = {};

//   for (let i of A) {
//     if (!obj.hasOwnProperty(i)) {
//       obj[i] = 0;
//     }
//   }

//   for (let i of A) {
//     obj[i]++;
//   }

//   for (let i in obj) {
//     if (obj[i] % 2 == 0) {
//     } else {
//       return Number(i);
//     }
//   }
// }

// console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

// ------------------------------

// function friend(friends) {
//   return friends.filter((x) => x.length == 4);
// }

// ---------------------------------------------------------
