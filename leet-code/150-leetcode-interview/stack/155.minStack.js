// /*
// var MinStack = function () {
//   this.stack = []; // Main stack to hold all elements
//   this.minStack = []; // Auxiliary stack to hold minimum values
// };

// /**
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function (val) {
//   this.stack.push(val); // Push the value onto the main stack

//   // If the minStack is empty or the current value is less than or equal to the current minimum
//   if (
//     this.minStack.length === 0 ||
//     val <= this.minStack[this.minStack.length - 1]
//   ) {
//     this.minStack.push(val); // Push the new minimum onto the min stack
//   }
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function () {
//   if (this.stack.length === 0) {
//     return; // Prevent popping from an empty stack
//   }

//   const poppedValue = this.stack.pop(); // Remove the top element from the main stack

//   // If the popped value is the current minimum, pop it from the min stack too
//   if (poppedValue === this.minStack[this.minStack.length - 1]) {
//     this.minStack.pop(); // Remove the minimum value as well
//   }
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function () {
//   return this.stack[this.stack.length - 1]; // Return the top element from the main stack
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function () {
//   return this.minStack[this.minStack.length - 1]; // Return the current minimum from the min stack
// };

// // Example usage:
// let minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack.getMin()); // Output: -3
// minStack.pop();
// console.log(minStack.top()); // Output: 0
// console.log(minStack.getMin()); // Output: -2

var MinStack = function () {
  this.stack = []; // Main stack to hold all elements
  this.minStack = []; // Auxiliary stack to hold minimum values
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val); // Push the value onto the main stack

  // If the minStack is empty or the current value is less than or equal to the current minimum
  if (
    this.minStack.length === 0 ||
    val <= this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.push(val); // Push the new minimum onto the min stack
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length === 0) {
    return; // Prevent popping from an empty stack
  }

  const poppedValue = this.stack.pop(); // Remove the top element from the main stack

  // If the popped value is the current minimum, pop it from the min stack too
  if (poppedValue === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop(); // Remove the minimum value as well
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]; // Return the top element from the main stack
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1]; // Return the current minimum from the min stack
};
