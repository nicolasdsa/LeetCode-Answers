/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  let string = "";
  let tempString = "";

  command.split("").forEach(function (letter) {
    if (letter == "G") {
      string += "G";
      return;
    }

    tempString += letter;

    if (tempString == "(al)") {
      string += "al";
      tempString = "";
    }

    if (tempString == "()") {
      string += "o";
      tempString = "";
    }
  });

  return string;
};
