// with pointer

var mergeAlternately = function (word1, word2) {
  let first = 0;
  let second = 0;
  let result = "";
  while (first < word1.length || second < word2.length) {
    word1[first] ? (result += word1[first]) : "";
    word2[second] ? (result += word2[second]) : "";
    first++;
    second++;
  }
  return result;
};

// looping

var mergeAlternately = function (word1, word2) {
  let result = "";
  let i = 0;
  for (i; i < word1.length; i++) {
    result += word1[i];
    if (word2[i]) result += word2[i];
  }
  if (word2.length > word1.length) {
    for (i; i < word2.length; i++) result += word2[i];
  }
  return result;
};

var mergeAlternately = function (word1, word2) {
  const result = [];
  word1 = word1.split("");
  word2 = word2.split("");

  while (word1.length && word2.length) {
    result.push(word1.shift());
    result.push(word2.shift());
  }

  if (word1.length) result.push(...word1);
  if (word2.length) result.push(...word2);
  return result.join("");
};

console.log(mergeAlternately("ab", "pqrs"));
