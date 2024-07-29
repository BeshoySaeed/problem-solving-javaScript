// function solution(number) {
//   let arrSolution = [];
//   for (let i = 1; i < number; i++) {
//     if (3 * i < number) {
//       arrSolution.push(3 * i);
//     }
//     if (5 * i < number) {
//       arrSolution.push(5 * i);
//     }
//   }
//   const uniqueArr = [...new Set(arrSolution)];
//   return uniqueArr.reduce((acc, current) => acc + current, 0);
// }

function solution(number) {
  let arrSolution = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arrSolution.push(i);
    }
  }
  return arrSolution.reduce((acc, current) => acc + current, 0);
}

console.log(solution(20));
