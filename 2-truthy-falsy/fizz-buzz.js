const readline = require('readline');
//let n= prompt("dame numero: "),alert,confirm funcionan solo en navegador
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Dame un numero: ', (numero) => {
  if (numero % 3 == 0 && numero % 5 == 0) 
    console.log(numero,"FizzBuzz");
  else if (numero % 3 == 0) 
    console.log(numero,"Fizz");
  else if(numero % 5 == 0)
    console.log(numero,"Buzz")
  else
    console.log(numero);
  rl.close()
});
