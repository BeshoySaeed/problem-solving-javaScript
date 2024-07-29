// function toUnderscore(string) {
//   return (
//     string[0].toLowerCase() +
//     string
//       .split("")
//       .slice(1)
//       .map((x) => (x == x.toUpperCase() ? `_${x.toLowerCase()}` : x))
//       .join("")
//   );
// }

function toUnderscore(string) {
  if (string) {
    return (
      string[0].toLowerCase() +
      string
        .slice(1)
        .replace(/([A-Z])/g, "_$1")
        .toLowerCase()
    );
  }
}
console.log(toUnderscore("App7Test"));
