var isPalindrome = function (s) {
  let first = 0;
  let second = 1;
  let ans = "";
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz0123456789"];
  if (alphabet.includes(s[first].toLowerCase())) {
    ans += s[first].toLowerCase();
  }
  while (second < s.length) {
    if (alphabet.includes(s[second].toLowerCase())) {
      ans += s[second].toLowerCase();
    }
    second++;
  }
  return ans === ans.split("").reverse().join("");
};

console.log(isPalindrome("0P"));
