/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  const meuArray = new Array(s.length);

  indices.forEach(function (indice, index) {
    meuArray[indice] = s[index];
  });

  return meuArray.join("");
};
