function duplicateEncode(word) {
  let ans = "";
  let arrWord = word.split("");
  for (let i = 0; i < arrWord.length; i++) {
    if (
      arrWord.filter((x) => x.toLowerCase() == arrWord[i].toLowerCase())
        .length > 1
    ) {
      ans += ")";
    } else {
      ans += "(";
    }
  }
  return ans;
}

console.log(duplicateEncode("Success"));
