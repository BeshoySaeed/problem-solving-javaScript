var isSubsequence = function (s, t) {
  let pointerT = 0;
  let pointerS = 0;
  let arrS = s.split("");
  let arrT = t.split("");
  while (pointerT < arrT.length || pointerS == arrS.length) {
    if (arrT[pointerT] == arrS[pointerS]) {
      pointerS++;
      pointerT++;
    } else {
      pointerT++;
    }
  }
  return pointerS == arrS.length + 1;
};

console.log(isSubsequence("axc", "ahbgdc"));
