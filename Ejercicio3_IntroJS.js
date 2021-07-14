/*Escribe un programa que le pida al usuario ingresar un número, luego le pide un segundo número, e imprima en la consola la suma de los dos números que ingresó el usuario.*/

let num1 = prompt("Por favor digite el primer número: ");
let num2 = prompt("Por favor digite el segundo número: ");
let total = parseInt(num1) + parseInt(num2);
console.log(`La suma total de ${num1}+${num2} es: ${total}`);
