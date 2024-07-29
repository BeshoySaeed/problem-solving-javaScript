function nbYear(p0, percent, aug, p) {
  let years = 0;
  while (p0 <= p) {
    years++;
    p0 = p0 + p0 * (percent / 100) + aug;
  }
  return years;
}
