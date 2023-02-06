/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  let contador = 0;
  for (let i = 0; i < num.length; i++) {
    contador = 0;
    for (let j = 0; j < num.length; j++) {
      if (num[j] == i) {
        contador++;
      }
    }

    if (num[i] != contador) {
      return false;
    }
  }

  return true;
};
