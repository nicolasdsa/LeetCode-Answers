/* Every is very useful */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 0) {
    return "";
  }

  for (let i = 0; i < strs[0].length; i++) {
    if (!strs.every((palavra) => palavra[i] === strs[0][i])) {
      return strs[0].slice(0, i);
    }
  }

  let result = strs[0];

  return result;
};
