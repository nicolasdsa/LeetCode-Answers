/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
  let contador = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == letter) {
      contador++;
    }
  }

  return Math.floor((contador / s.length) * 100);
};
