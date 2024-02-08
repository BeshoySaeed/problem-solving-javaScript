var getIntersectionNode = function (headA, headB) {
  let largestList = headA.length > headB.length ? headA : headB;
  let smallestList = headA.length > headB.length ? headB : headA;

  for (let i = 0; i < largestList.length; i++) {
    for (let j = 0; j < smallestList.length; j++) {
      if (largestList[i] === smallestList[j] && j <= i) {
        return `Intersected at ${largestList[i]}`;
      }
    }
  }
  return null;
};

console.log(getIntersectionNode([4, 1, 8, 4, 5], [5, 6, 1, 8, 4, 5]));
