// Step 1 : retrieve names files
var arg = process.argv.slice(2);

// Step 2 : retrieve informations from these files
var fs = require('fs');

// Step 3 : assign content to a variable
var c1 = fs.readFileSync(arg[0], "utf8").split("\n");
var c2 = fs.readFileSync(arg[1], "utf8").split("\n");

// Step 4 : display position
for (var i = 0; i < c2.length; i++) {
  // for each element of the array c2
  for (var j = 0; j < c2[i].length; j++) {
    // for each char of the element
    if (c2[i][j] == c1[0][0] && c2[i][j + 1] == c1[0][1] && c2[i][j + 2] == c1[0][2]) {
      // if c2[0][0] (the first char of the first element of the array c2) == c1[0][0] (the first char of the first element of the array c1)
      // and c2[0][1] == c1[0][1]
      // and c2[0][2] == c2[0][2]
      // then continue to check
      // else stop
      if (c2[i + 1][j] == c1[1][0] && c2[i + 1][j + 1] == c1[1][1] && c2[i + 1][j + 2] == c1[1][2]) {
        // if c2[1][0] (the first char of the 2nd element of the array) == c1[1][0] (the first char of the 2nd element of the array)
        // and c2[1][1] == c1[1][1]
        // and c2[1][2] == c1[1][2]
        // then continue to check
        // else stop
        if (c2[i + 2][j] == c1[2][0] && c2[i + 2][j + 1] == c1[2][1] && c2[i + 2][j + 2] == c1[2][2]) {
          // if c2[2][0] (the first char of the 3rd element of the array) == c1[2][0] (the first char of the 3rd element of the array)
          // and c2[2][1] == c1[2][1]
          // and c2[2][2] == c1[2][2]
          // then RETURN (2, 1)
          console.log("Find it but cannot show it !");
          // else stop


        }
      }
    }
  }
}
