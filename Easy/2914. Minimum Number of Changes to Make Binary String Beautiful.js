/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function (s) {
  const sSplit = s.split("");
  let result = 0;

  for (let i = 0; i < sSplit.length; i += 2) {
    if (sSplit[i] != sSplit[i + 1]) {
      result++;
    }
  }

  return result;
};
