/* Escribe un programa que piense un número de forma aleatoria y le pida al usuario que lo trate de adivinar (como en uno de los ejercicios anteriores). La diferencia es que esta vez el usuario puede intentar indefinidamente hasta que encuentre el número. */

let randomNumber = Math.round(Math.random() * 10);

let userNumber = 1;

while (userNumber != randomNumber) {
  
  let userNumber = parseInt(prompt("Por favor digite el número: "));

  if (userNumber === randomNumber) {
    console.log('Felicitaciones, ese era!', randomNumber);
    break;
  } else {
    console.log('Lo siento, intenta nuevamente!');
  }
}
