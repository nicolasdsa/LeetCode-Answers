/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let contador = 0;
  while (n != 0) {
    contador += n & 1;
    n = n >>> 1;
  }
  return contador;
};
