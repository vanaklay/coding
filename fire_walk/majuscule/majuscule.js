var argu = process.argv[2];
var i = 0;
var res = "";
var arguSplitted = argu.split(" ");

for (var i = 0; i < arguSplitted.length; i++) {
  for (var e = 0; e < arguSplitted[i].length; e++) {
    if (e % 2 == 0) {
      var lower = arguSplitted[i][e].toLowerCase();
      res += lower;
    }
    else {
       var upper = arguSplitted[i][e].toUpperCase();
      res += upper;
    }
  }
  res += " ";
}

console.log(res);
