/*
Escribe un programa que le pida una frase al usuario e imprima cada palabra en una nueva línea. Por ejemplo:

Ingresa una frase> esta es una prueba
esta
es
una
prueba
Nota: Las palabras se separan por espacio.
*/

let phrase = prompt('Por favor, ingrese una frase: ')
phrase = phrase.split(' ')

for (let i = 0; i < phrase.length; i ++) {
  console.log(phrase[i]);
}
