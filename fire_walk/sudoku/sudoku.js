// 1. retrieve sudoku from txt file
var arg = process.argv.slice(2);
var fs = require("fs");
var arrayChecked = fs.readFileSync(arg[0], "utf8").split("\n");

// 2. clean sudoku
var sudoku = [];
for (var i = 0; i < arrayChecked.length; i++){
  if (arrayChecked[i] != '---+---+---' && arrayChecked[i] != ''){
    sudoku.push(arrayChecked[i]);
  }
}

// 3. Pour une ligne quels sont les numéros possible ? *** partie où je bloque ***
//
var oneLine = sudoku[0]; // ==> 195|784|2__
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // ==> array numbers
var tmp = []; // ==> [1, 9, 5, 7, 8, 4, 2] après boucle for en bas
var restant = [];
// donc pour chaque element de array numbers
//      si numbers[i] not in tmp
//          tu mets numbers[i] dans array restant

for (var i = 0; i < oneLine.length; i++){
    if ((oneLine[i] != "|") && (oneLine[i] != "_")) {
      tmp.push(parseInt(oneLine[i]));
    }
}
// la boucle for ci dessous ne fait pas ce que je veux.
// je veux que array restant = [0, 3, 6]
for (var j = 0; j < numbers.length; j++) {
  if ( numbers[j] in tmp) {
    restant.push(parseInt(numbers[i]));
  }
}

console.log(restant); // ==> ça me retourne des Nan ... ??

// pour résoudre le sudoku :
// il faut que le nombre ne soit ni sur l'axe des x
// et ni sur l'axe des y
// il ne peut y avoir que 9 numéro possible
// donc numéro != ceux afficher
// function qui check x et function qui check y

//test

// pour connaitre la position des trous
// if (!(oneLine[i] in numbers) && (oneLine[i] != "|")) {
//   // j'ai la position des trous
//   console.log(oneLine[i], i);
//   // si num in numbers alors je cree un autre array avec ces numbers
//   // et une variable avec difference entre numbers_origine et new_numbers
// }
