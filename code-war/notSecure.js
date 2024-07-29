function alphanumeric(string) {
  let regEx = /^[a-zA-Z-0-9]+$/;
  return regEx.test(string);
}

console.log(alphanumeric("GU!WTo"));
