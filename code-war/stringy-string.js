function stringy(size) {
  let answer = "";

  for (let i = 0; i < size; i++) {
    if (answer[i - 1] == "1") {
      answer += "0";
    } else {
      answer += "1";
    }
  }
  return answer;
}

console.log(stringy(6));
