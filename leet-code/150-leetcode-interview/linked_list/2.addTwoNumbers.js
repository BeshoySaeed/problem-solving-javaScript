var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode();
  let curr = dummy;
  let carry = 0;

  while (l1 || l2) {
    let sum = carry;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    curr = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    curr = curr.next;
  }
  if (carry != 0) {
    curr.next = new ListNode(carry);
  }

  return dummy.next;
};

// set new node;
// make an initial value for summation as 0;
// while l1 and l2 are not null;
// if l1 and l2 are not null
// then add the values of l1 and l2;
// if carry is not 0
// then add the value of carry to the next node;
// return new node;
