// 1. retrieve sudoku from txt file
var arg = process.argv.slice(2);
var fs = require("fs");
var arrayChecked = fs.readFileSync(arg[0], "utf8").split("\n");

// 2. clean sudoku
var sudoku = [];
for (var i = 0; i < arrayChecked.length; i++){
  if (arrayChecked[i] != '---+---+---' && arrayChecked[i] != ''){
    var tmp = [];
    for (var j = 0; j < arrayChecked[i].length; j++){
      if ((arrayChecked[i][j] != '|') && (arrayChecked[i][j] != '_')) {
        tmp.push(parseInt(arrayChecked[i][j]));
      }
      else {
        if (arrayChecked[i][j] == '_') {
          tmp.push(0);
        }
      }
    }
    sudoku.push(tmp);
  }
}

// 3. functions
// function getCol ==> return all element in the given matrix and given position
function getCol(matrix, col) {
  var column = [];
  for (var i =0; i < matrix.length; i++) {
    column.push(matrix[i][col]);
  }
  return column;
}

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// 4. Puts all together
for (i = 0; i < sudoku.length; i++) {
  // for each array of sudoku
  for (var j = 0; j < sudoku[i].length; j++) {
    // for each element in each line
    if (sudoku[i][j] == 0) {
      var tmp = [];
      var col = getCol(sudoku, j);
      for (k = 0; k < numbers.length; k++){
        if (!(sudoku[i].includes(numbers[k])) && !(col.includes(numbers[k]))) {
          tmp.push(numbers[k]);
          }
        }
      sudoku[i][j] = tmp.shift(); // erase the first element in tmp and add to variable
      }
    }
  }

console.log(sudoku);
