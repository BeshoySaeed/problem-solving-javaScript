var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  strs.sort();
  const firstStr = strs[0];
  const lastStr = strs[strs.length - 1];

  let commonPrefix = "";
  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr.charAt(i) === lastStr.charAt(i)) {
      commonPrefix += firstStr.charAt(i);
    } else {
      break;
    }
  }

  return commonPrefix;
};
