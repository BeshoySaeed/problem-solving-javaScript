var removeStars = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") {
      stack.pop();
      continue;
    }
    stack.push(s[i]);
  }
  return stack.join("");
};

console.log(removeStars("leet**cod*e"));
