/*Un múltiplo de 5 es aquel que dividido por 5 da por resultado un número entero (sin residuo). Por ejemplo 10, 15, 20, etc. son múltiplos de 5. 11 no es múltiplo de 5 porque quedaría un residuo de 1.
Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no.
Si es múltiplo debe imprimir "Si, el número x es múltiplo 5", de lo contrario debe imprimir "No, el número x no es múltiplo de 5".*/

let userNumber = parseInt(prompt("Por favor digite el número: "));
const multipleFive = 5;
if (userNumber % multipleFive == 0 ) {
  console.log(`Si, el número ${userNumber} es múltiplo 5`);
} else {
  console.log(`No, el número ${userNumber} no es múltiplo de 5`);
}
