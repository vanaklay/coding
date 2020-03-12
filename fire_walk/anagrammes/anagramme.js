// 1. retrieve items from arguments
var firstArgument = process.argv.slice(2);
var itemToCheck = firstArgument[0];
var fs = require("fs");
var arrayChecked = fs.readFileSync(firstArgument[1], "utf8").split("\n");

// 2. function to convert word into numerical
function toNumeric(word) {
  res = 0;
  var dictionary = {"a":1, "b":2, "c":3, "d":4, "e":5, "f":6,
                    "g":7, "h":8, "i":9, "j":10, "k":11, "m":12,
                    "n":13, "o":14, "p":15, "q":16, "r":17, "s":18,
                    "t":19, "u":20, "v":21, "w":22, "y":23, "z":24};
  for (var i = 0; i < word.length; i++) {
    for (var j = 0; j < Object.keys(dictionary).length; j++) {
      if (word[i] == Object.keys(dictionary)[j]) {
        res += Object.values(dictionary)[j];
      }

    }
  }
  return res;
}

// 3. for each element in array, convert word into numeric
var anagrams = [];
for (var i = 0; i < arrayChecked.length; i++){
  if (arrayChecked[i] != "") {
    if ( toNumeric(itemToCheck) == toNumeric(arrayChecked[i])) {
      anagrams.push(arrayChecked[i]);
    }
  }

}
console.log(anagrams);
