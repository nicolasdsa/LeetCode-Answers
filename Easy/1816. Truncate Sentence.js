/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */ //leetcode.com/problems/to-lower-case/
https: var truncateSentence = function (s, k) {
  return s.split(" ").slice(0, k).join(" ");
};
