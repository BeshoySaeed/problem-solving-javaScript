var partitionString = function (s) {
  let res = 1;
  let freqObj = {};
  for (let i = 0; i < s.length; i++) {
    if (freqObj[s[i]]) {
      freqObj = {};
      res++;
    }
    freqObj[s[i]] = true;
  }
  return res;
};
