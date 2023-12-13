// function hasUniqueChars(str) {
//   let arrOfString = str.trim().split("");
//   let arr = new Set(str);
//   if ([...arr].length === arrOfString.length) {
//     return true;
//   }
//   return false;
// }

function XO(str) {
  let strArr = str.split("");
  let x = 0;
  let o = 0;

  strArr.map((c) => {
    if (c.toLowerCase() === "x") {
      x++;
    } else if (c.toLowerCase() === "o") {
      o++;
    }
  });

  return x === o;
}

console.log("unique");

console.log(XO("xxOo"));
