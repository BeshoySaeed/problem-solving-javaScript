// function gcdOfStrings(str1, str2) {
//   // Helper function to find the greatest common divisor (GCD) of two numbers
//   function gcd(a, b) {
//     if (b === 0) return a;
//     return gcd(b, a % b);
//   }
//   if (str1 + str2 !== str2 + str1) return "";

//   let gcdLength = gcd(str1.length, str2.length);

//   return str1.substring(0, gcdLength);
// }

function gcdOfStrings(str1, str2) {
  function isDivisor(s, t) {
    let n = s.length / t.length;
    return t.repeat(n) === s;
  }

  for (let i = Math.min(str1.length, str2.length); i > 0; i--) {
    console.log(i);
    if (str1.length % i === 0 && str2.length % i === 0) {
      console.log("in");
      let candidate = str1.substring(0, i);
      console.log(candidate);
      if (isDivisor(str1, candidate) && isDivisor(str2, candidate)) {
        return candidate;
      }
    }
  }

  return "";
}

console.log(gcdOfStrings("ABABAB", "ABAB"));
