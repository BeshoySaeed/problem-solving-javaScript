// function breakChocolate(n, m) {
//   let numberOfSquares = 0;

//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= m; j++) {
//       numberOfSquares++;
//     }
//   }
//   if (n == 0 || m == 0) {
//     return (numberOfSquares = 0);
//   } else {
//     return numberOfSquares - 1;
//   }
// }

function breakChocolate(n, m) {
  // if (n * m === 0) {
  //   return 0;
  // } else {
  //   return n * m - 1;
  // }
  return n * m == 0 ? 0 : n * m - 1;
}

console.log(breakChocolate(5, 5));
