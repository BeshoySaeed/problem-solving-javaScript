function isTriangle(a, b, c) {
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  if (a > 0 && b > 0 && c > 0) {
    if (area > 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
