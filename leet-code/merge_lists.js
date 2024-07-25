var mergeTwoLists = function (list1, list2) {
  let result = [...list1, ...list2];
  return result.sort((a, b) => a - b);
};

console.log(mergeTwoLists([], []));
