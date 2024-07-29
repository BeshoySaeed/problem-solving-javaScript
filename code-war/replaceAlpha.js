function alphabetPosition(text) {
  let alphaArr = "abcdefghijklmnopqrstuvwxyz";
  let ans = [];
  for (let i = 0; i < text.length; i++) {
    if (alphaArr.includes(text[i].toLowerCase())) {
      ans.push(alphaArr.indexOf(text[i].toLowerCase()) + 1);
    }
  }
  return ans.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
