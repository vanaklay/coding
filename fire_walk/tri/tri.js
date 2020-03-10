var arg = (process.argv).slice(2);
var flag = true;

while (flag) {
  flag = false;
  for ( var i = 0; i < arg.length; i++) {
    if ( arg[i] < arg[i + 1]) {
      var tmp = arg[i + 1];
      arg[i + 1] = arg[i];
      arg[i] = tmp;
      flag = true;
    }

  }
}

console.log(arg);

// First step :
// What returns process.argu ?

// Next step :
// How are arguments being stocked ?

// Step 3: Slicing

// Step 4: Debug when given another number : flag
