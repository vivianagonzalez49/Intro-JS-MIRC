/* Escribe un programa para la consola que le pida al usuario un número y sume todos los números desde 1 hasta ese número.
Por ejemplo, si el usuario ingresa el número 5, el programa debe imprimir 15 (1+2+3+4+5). Si el usuario ingresa el número 10, el programa debe imprimir 55. */

let userNumber = parseInt(prompt("Por favor digite el número: "));
let sum = 0;

for (i=1; i<(userNumber+1); i++) {
  sum += i;
}
console.log(`La suma es: ${sum}`);
