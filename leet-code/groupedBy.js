// with frequency counter

Array.prototype.groupBy = function (fn) {
  let result = {};
  for (let i of this) {
    const key = fn(i);
    result[key] = result[key] || [];
    result[key].push(i);
  }
  return result;
};
array = [{ id: "1" }, { id: "1" }, { id: "2" }];

console.log(
  array.groupBy(function (item) {
    return item.id;
  })
);
