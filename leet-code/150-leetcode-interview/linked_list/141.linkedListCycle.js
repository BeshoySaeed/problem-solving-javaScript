var hasCycle = function (head) {
  const nodesValues = {};
  let currentHead = head;
  while (currentHead) {
    if (nodesValues[currentHead]) return true;
    nodesValues[currentHead] = currentHead;
    currentHead = currentHead.next;
  }
  return false;
};

// correct
var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};
