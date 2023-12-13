// to check
String.prototype.toJadenCase = function () {
  let sentence = this.split(" ");
  let jadensentance = sentence.filter((x) => x[0] == x[0].toUpperCase());

  if (jadensentance.length == sentence.length) {
    return true;
  }
  return false;
};

// to switch
String.prototype.toJadenCase = function () {
  let sentence = this.split(" ").map((x) => x[0].toUpperCase() + x.slice(1));
  return sentence.join(" ");
};
