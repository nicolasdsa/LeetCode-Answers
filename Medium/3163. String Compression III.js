/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
  const wordSplit = word.split("");
  let resultWord = "";
  let tempLetter = wordSplit[0];
  let tempCount = 1;

  for (let i = 1; i < wordSplit.length; i++) {
    if (tempLetter != wordSplit[i]) {
      resultWord += `${tempCount}${tempLetter}`;
      tempLetter = wordSplit[i];
      tempCount = 1;
      continue;
    }

    if (tempCount == 9) {
      resultWord += `${tempCount}${tempLetter}`;
      tempLetter = wordSplit[i];
      tempCount = 1;
      continue;
    }

    tempCount++;
  }

  resultWord += `${tempCount}${tempLetter}`;

  return resultWord;
};
