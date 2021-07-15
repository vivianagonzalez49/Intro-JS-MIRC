/* Escribe un programa para la consola que le pida al usuario un número e imprima los números desde 1 hasta el número.
Por ejemplo, si el usuario ingresa el número 5, el programa de be imprimir:
1
2
3
4
5 */

let userNumber = parseInt(prompt("Por favor digite el número: "));

for (i=1; i<=userNumber; i++) {
  console.log(i);
}
