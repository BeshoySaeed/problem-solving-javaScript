function XO(str) {
  let xs = [];
  let os = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == "x") {
      xs.push(str[i]);
    }
    if (str[i].toLowerCase() == "o") {
      os.push(str[i]);
    }
  }
  if (xs.length == os.length || (xs.length == 0 && os.length == 0)) {
    return true;
  } else {
    return false;
  }
}
