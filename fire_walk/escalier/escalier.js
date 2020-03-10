var argu = process.argv[2];
var iter = 0;

while (iter < argu){
  console.log("  ".repeat(argu-iter+1) + "#".repeat(iter+1));
  iter += 1;
}
