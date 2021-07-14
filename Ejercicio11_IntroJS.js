/*Escribe un programa que le pida al usuario ingresar un número.

    Si el número es múltiplo de 3 debe imprimir en la consola "bing".
    Si el número es múltiplo de 5 debe imprimir en la consola "bong".
    Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola "bingbong".
    Si no cumple ninguna de las condiciones anteriores 
debe imprimir el mismo número.*/

let userNumber = parseInt(prompt("Por favor digite el número: "));
const multipleFive = 5;
const multipleThree = 3;

if (userNumber % multipleThree == 0 && userNumber % multipleFive == 0) {
  console.log('bingbong');
} else if (userNumber % multipleThree == 0) {
  console.log('bing');
} else if (userNumber % multipleFive == 0) {
  console.log('bong');
} else {
  console.log(`Su número ingresado es: ${userNumber}`);
}
