var findDisappearedNumbers = function (nums) {
  let elementsObj = {};
  let arrOfRange = Array.from({ length: nums.length }, (_, i) => i + 1);
  let disappeared = [];
  for (let i of nums) {
    elementsObj[i] = (elementsObj[i] || 0) + 1;
  }
  for (let i of arrOfRange) {
    if (!(i in elementsObj)) {
      disappeared.push(i);
    }
  }
  return disappeared;
};

console.log(findDisappearedNumbers([1, 2, 3, 3, 3, 6, 7, 8, 9]));
