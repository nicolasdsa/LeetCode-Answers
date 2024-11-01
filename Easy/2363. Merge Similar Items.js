/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
  const array = [...items1, ...items2];
  let arrayReturn = [];
  let arrayAux = [];

  for (let i = 0; i < array.length; i++) {
    const index = arrayAux.indexOf(array[i][0]);
    if (index == -1) {
      arrayReturn.push(array[i]);
      arrayAux.push(array[i][0]);
      continue;
    }

    arrayReturn[index][1] += array[i][1];
  }

  return arrayReturn.sort((a, b) => a[0] - b[0]);
};
