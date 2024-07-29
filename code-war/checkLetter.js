function letterCheck(arr) {
  let fWord = arr[0];
  let sWord = arr[1];
  let errArr = [];
  for (let i = 0; i < sWord.length; i++) {
    if (!fWord.toLowerCase().includes(sWord[i].toLowerCase())) {
      errArr.push(true);
    }
  }
  if (errArr.length > 0) {
    return false;
  } else {
    return true;
  }
}

console.log(letterCheck(["arches", "later"]));
