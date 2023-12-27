var isPalindrome = function (x) {
  const palindrome = x.toString().split("").reverse().join("");
  return +palindrome == x;
};

console.log(isPalindrome(1231));

console.log(12316 % 10);
