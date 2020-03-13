var argu = parseInt(process.argv[2]);

function factorial(num) {
  if (num < 1)
    return 1;
  else {
    return (factorial(num - 1) * num);
  }

}
function convertToString(entier) {
  var firstNumber = entier.slice(0,1);
  var restNumber = entier.slice(1);
  var tmp = [firstNumber];
  do {
    tmp.push(restNumber.slice(0, 3));
    restNumber = restNumber.slice(3);
  }
  while (restNumber.length > 3);
  tmp.push(restNumber);
  var final = tmp.join(",");
  return final;
}

// function add with retenue
function add(num1, num2) {
  var sum = "";
  var num1ToString = num1.toString();
  var num2ToString = num2.toString();
  var num1Length = num1ToString.length;
  var num2Length = num2ToString.length;

  // swap to have the large length on top
  if (num2Length > num1Length) {
    var tmp = num2ToString;
    num2ToString = num1ToString;
    num1ToString = tmp;
  }

  var retenue = 0;
  var a;
  var b;
  var temp;
  var tempSum;
  for (var i = 0; i < num1ToString.length; i++){
    // from right to left
    a = parseInt(num1ToString.charAt(num1ToString.length - 1 - i));
    b = parseInt(num2ToString.charAt(num2ToString.length - 1 - i));
    // because sometime b.length < a.length and can be return us Nan value for b
    // then do this code to make sure that b equal a number
    if ( isNaN(b) ) {
      b = 0;
    }
    // tempory add
    temp = (retenue + a + b).toString();
    tempSum = temp.charAt((temp.length - 1));
    // split retenue and tempSum
    retenue = parseInt(temp.substr(0, temp.length - 1));
    // same as b, retenue can be a Nan value
    if ( isNaN(retenue) ) {
      retenue = 0;
    }
    // puts in all together
    if ( i === num1ToString.length - 1 ) {
      sum = temp + sum;
    }
    else {
      sum = tempSum + sum;
    }
  }
  return sum;
  //End function
}
function factorialByIteration(num) {
  if (Number.isSafeInteger(factorial(num))){
    var temp = factorial(num).toString();
    if (temp.length < 4) {
      return temp;
    }
    if (temp.length >= 4) {
      return convertToString(temp);
    }
  }
  else {
    var fact = 1;
    for (var i = 2; i <= num; i++) {
      var factXi = 0;
      for ( var j = 0; j < i; j++) {
        factXi = add(factXi, fact);
      }
      fact = factXi;
    }
    return convertToString(fact);
  }

}

//
// function longFactorial(num) {
//   var entier = factorial(num);
//   var numToString = entier.toString();
//   console.log(numToString.length);
//   if (Number.isSafeInteger(factorial(num))){
//     console.log("à changer en string");
//   }
//   if ((numToString.length > 4) && (numToString.length < 20)) {
//     console.log(convertToString(numToString));
//   }
//   else {
//     entier = factorialByIteration(num);
//     return convertToString(numToString);
//   }
// }


// test
// function test(number) {
//   var fact = 1;
//   console.log("fact av for: ", fact);
//   for ( var i = 2; i <= number; i++) {
//     fact = fact * i;
//     console.log("fact ap iteration: ", fact);
//
//   }
//   return fact;
// }
console.log(factorialByIteration(argu));
console.log(factorial(argu));
