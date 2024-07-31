function areThereDuplicates() {
  let collections = {};
  for (let i of arguments) {
    collections[i] = (collections[i] || 0) + 1;
  }
  for (let i in collections) {
    if (collections[i] > 1) return true;
  }
  return true;
}

console.log(areThereDuplicates(1, 2, 3, 3, 4, 5, 6));
