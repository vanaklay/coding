var argu = parseInt(process.argv[2]);

console.log(factorial(argu));

function factorial (num){
  if (num < 1)
    return 1;
  else {
    return factorial(num - 1) * num;
  }

}
