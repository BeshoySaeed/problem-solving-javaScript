// O(n) to make the output in this O big notation so i suggest i'll use frequency counter

var findDuplicates = function (nums) {
  let elementsObj = {};
  let duplicatedArr = [];
  for (let i of nums) {
    elementsObj[i] = (elementsObj[i] || 0) + 1;
  }
  for (let i in elementsObj) {
    if (elementsObj[i] === 2) duplicatedArr.push(i);
  }
  return duplicatedArr;
};

console.log(findDuplicates([1, 2, 3, 1, 2]));
