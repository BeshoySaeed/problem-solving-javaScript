var getIntersectionNode = function (headA, headB) {
  for (let i = 0; i < headA.length; i++) {
    const firstHead = headA.slice(i);
    const headBExistIndex = headB.indexOf(headA[i]);
    if (headBExistIndex != -1) {
      const secondHead = headB.slice(headBExistIndex);
      console.log("first arr", firstHead);
      console.log("second arr", secondHead);
      if (arraysAreEqual(firstHead, secondHead)) {
        return firstHead[0];
      }
    } else {
      continue;
    }
  }
  return null;
};

function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

console.log(getIntersectionNode([1, 9, 1, 2, 4], [3, 2, 4]));

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Creating nodes
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);

// Connecting nodes to form a linked list
node1.next = node2;
node2.next = node3;
