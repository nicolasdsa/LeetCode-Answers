/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  const sentenceSplit = sentence.split(" ");

  if (sentenceSplit.length == 1) {
    return sentenceSplit[0][0] == sentenceSplit[0].slice(-1) ? true : false;
  }

  let tempFinalLetter = sentenceSplit[0].slice(-1);

  for (let i = 1; i < sentenceSplit.length; i++) {
    const lastLetter = sentenceSplit[i][0];

    if (tempFinalLetter != lastLetter) {
      return false;
    }

    tempFinalLetter = sentenceSplit[i].slice(-1);
  }

  if (sentenceSplit[0][0] != sentenceSplit.slice(-1)[0].slice(-1)) {
    return false;
  }

  return true;
};
