function loop(word) {
  let arrOfChar = word.split("");
  let i = 0;
  while (i < arrOfChar.length) {
    const letter = arrOfChar[i];
    arrOfChar.splice(i, 1);
    if (!arrOfChar.includes(letter)) {
      return letter;
    }
  }
}

console.log(loop("hello world"));
