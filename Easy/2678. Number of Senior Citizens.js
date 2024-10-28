/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let age = 0;

  for (let i = 0; i < details.length; i++) {
    const removed = details[i].slice(11, 13);

    if (removed > 60) {
      age++;
    }
  }

  return age;
};
