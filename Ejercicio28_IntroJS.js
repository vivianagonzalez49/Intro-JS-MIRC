/*
Escribe un programa que le pida dos frases al usuario e imprima los caracteres que tienen en común. Si no tienen caracteres en común debe imprimir "No se encontraron caracteres en común".

Ejemplo 1:

Ingresa frase 1> German
Ingresa frase 2> Gabriela
Los caracteres en común son: G, e, r, a
Ejemplo 2:

Ingresa frase 1> Hola
Ingresa frase 2> Bye
No se encontraron caracteres en común
*/

let phraseOne = prompt('Por favor, ingrese la primera frase: ')
let phraseTwo = prompt('Por favor, ingrese la segunda frase: ')
let commonLetters = ''

for(let i = 0; i < phraseOne.length; i++){
  if (phraseTwo.includes(phraseOne[i])) {
  commonLetters+=phraseOne[i]+', '}
}

if (commonLetters.length>=1) {
console.log('Los caracteres en común son: ' + commonLetters.slice(0, -2))
}else {
  console.log('No se encontraron caracteres en común')
}
