function createPhoneNumber(numbers) {
  let firstFour = numbers.slice(0, 3).join("");
  let secondThree = numbers.slice(3, 6).join("");
  let thirdThree = numbers.slice(6).join("");
  return `(${firstFour}) ${secondThree}-${thirdThree}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
