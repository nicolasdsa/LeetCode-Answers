/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const count = arr.length;
  let resultArray = [];
  let sizeAcc = 0;

  for (let i = 0; i < count; i++) {
    resultArray[i] = arr.splice(0, size);

    if (arr.length == 0) {
      break;
    }
  }

  return resultArray;
};
