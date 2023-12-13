var transpose = function (matrix) {
  let first = [];
  let second = [];
  let third = [];

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].length == 3) {
      first.push(matrix[i][0]);
      second.push(matrix[i][1]);
      third.push(matrix[i][2]);
    } else if (matrix[i].length == 2) {
      first.push(matrix[i][0]);
      second.push(matrix[i][1]);
    } else {
      first.push(matrix[i][0]);
    }
  }
  if (first.length > 0 && second.length > 0 && third.length > 0) {
    return [first, second, third];
  } else if (first.length > 0 && second.length > 0) {
    return [first, second];
  } else {
    return [first];
  }
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

// not solved yet
