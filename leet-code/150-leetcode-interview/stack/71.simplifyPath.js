var simplifyPath = function (path) {
  let stack = [];
  let pathArr = path.split("/").filter((x) => x !== "");
  for (let i = 0; i < pathArr.length; i++) {
    console.log(stack);
    if (pathArr[i] == "" || pathArr[i] == ".") {
      continue;
    } else if (pathArr[i] == "..") {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      if (pathArr[i]) stack.push(pathArr[i]);
    }
  }
  return "/" + stack.join("/");
};

console.log(simplifyPath("/../"));
