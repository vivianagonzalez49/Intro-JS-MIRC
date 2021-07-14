/*Escribe un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario debe imprimir "Lo siento, intenta nuevamente!"*/

let userNumber = parseInt(prompt("Por favor digite el número: "));
const minNumber = 1;
const maxNumber = 10;
let randomNumber = parseInt(Math.random()*(maxNumber - minNumber)+minNumber);
if (userNumber === randomNumber) {
  console.log('Felicitaciones, ese era!');
} else {
  console.log('Lo siento, intenta nuevamente!');
}
console.log(`El número random era: ${randomNumber}`)
