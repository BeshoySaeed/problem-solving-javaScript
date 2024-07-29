function charConcat(string) {
  let fArr = string.split("");
  let sArr = string.split("").reverse();
  let result = "";
  for (let i = 0; i <= fArr.length / 2 - 1; i++) {
    result += `${fArr[i]}${sArr[i]}${i + 1}`;
  }
  return result;
}

console.log(charConcat("CodeWars"));
