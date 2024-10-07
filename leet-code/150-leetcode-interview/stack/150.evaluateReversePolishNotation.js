var evalRPN = function (tokens) {
  const operators = ["+", "-", "*", "/"];
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    let current = tokens[i];
    if (operators.includes(current)) {
      if (stack.length >= 2) {
        const el1 = +stack.pop();
        const el2 = +stack.pop();
        if (current == "+") {
          stack.push(el2 + el1);
        } else if (current == "-") {
          stack.push(el2 - el1);
        } else if (current == "/") {
          stack.push(Math.trunc(el2 / el1));
        } else {
          stack.push(el2 * el1);
        }
      }
    } else [stack.push(+current)];
  }

  return stack[0];
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));
