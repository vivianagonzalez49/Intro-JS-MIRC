/*
Ejercicio 24
Escribe un programa que le pida una frase al usuario y le muestre el número de caracteres "a" que hay en la frase. Por ejemplo:
Ingresa una frase> Hasta la próxima
La frase tiene 4 caracteres "a"
*/

let phrase = prompt('Por favor, ingrese una frase: ')
let counter = 0

for (let i = 0; i < phrase.length; i ++) {
  if (phrase[i] === 'a') {
    counter++
  }
}
console.log(`La frase tiene ${counter} caracteres "a"`)
