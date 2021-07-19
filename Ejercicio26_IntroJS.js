/*
Escribe un programa que le pida una frase al usuario y capitalice cada palabra. Por ejemplo:

Ingresa una frase> esta es una prueba
Esta Es Una Prueba
*/

let phrase = prompt('Por favor, ingrese una frase: ')
const newPhrase = phrase.trim().split(" ").map(letter => letter[0].toUpperCase() + letter.slice(1)).join(" ");

console.log(`La frase final es: ${newPhrase}`)
