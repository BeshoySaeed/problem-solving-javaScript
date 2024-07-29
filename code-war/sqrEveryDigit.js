function squareDigits(num) {
  return Number(
    num
      .toString()
      .split("")
      .map((x) => +x * +x)
      .join("")
  );
}
