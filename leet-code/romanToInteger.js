var romanToInt = function (s) {
  const romansValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const arrOfInputs = s.split("");
  let answer = 0;

  for (let i = 0; i < arrOfInputs.length; i++) {
    if (romansValue[arrOfInputs[i]] < romansValue[arrOfInputs[i + 1]]) {
      answer -= romansValue[arrOfInputs[i]];
    } else {
      answer += romansValue[arrOfInputs[i]];
    }
  }
  return answer;
};

console.log(romanToInt("IV"));
