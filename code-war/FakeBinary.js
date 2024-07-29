function fakeBin(x) {
  let ans = "";
  // for (let i = 0; i < x.length; i++) {
  //   if (x[i] < 5) {
  //     ans += 0;
  //   } else {
  //     ans += 1;
  //   }
  // }
  // return ans;
  // return x.replace(/[0-4]/g, "0").replace(/[5-9]/g, "1");

  return x
    .split("")
    .map((x) => (x < 5 ? 0 : 1))
    .join("");
}

console.log(fakeBin("45385593107843568"));
