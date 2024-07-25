var mergeTwoLists = function (list1, list2) {
    let result = list1.concat(list2);
    return result.sort((a, b) => a - b);
};

console.log(mergeTwoLists([1, 8], [3]));
