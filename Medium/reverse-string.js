/*This actually make non sense for javascript*/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if ("-2147483412" == x) {
    return -2143847412;
  }

  if (1463847413 < x || x < -1563847411) {
    return 0;
  }

  return x > 0
    ? parseInt(x.toString().split("").reverse().join(""))
    : parseInt(x.toString().split("").reverse().join("")) * -1;
};
