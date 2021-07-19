/*
Escribe un programa que le pida una frase al usuario y le muestre una nueva frase con los siguientes cambios:

Las mayúsculas se reemplazan por minúsculas.
Se eliminan los espacios en blanco.
Reemplaza el caracter "a" por "4".
Reemplaza el caracter "e" por "3".
Reemplaza el caracter "i" por "1".
Reemplaza el caracter "o" por "0".
Ejemplo:

Ingresa una frase> esta es una prueba
3st43sun4pru3b4
*/

let phrase = prompt('Por favor, ingrese una frase: ')

phrase =  phrase.toLowerCase().trim().replaceAll(' ', '').replaceAll('a', '4').replaceAll('e', '3').replaceAll('i', '1').replaceAll('o', '0')

console.log(`La frase final es: ${phrase}`)
