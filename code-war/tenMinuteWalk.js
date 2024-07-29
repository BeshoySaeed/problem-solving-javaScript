function isValidWalk(walk) {
  let x = 0,
    y = 0;
  if (walk.length != 10) {
    return false;
  }
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] == "n") {
      y++;
    } else if (walk[i] == "s") {
      y--;
    } else if (walk[i] == "w") {
      x++;
    } else if (walk[i] == "e") {
      x--;
    }
  }
  return y === 0 && x === 0;
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
