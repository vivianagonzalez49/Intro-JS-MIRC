/*Escribe un programa que le pida un número al usuario e imprima en la consola si el número si es mayor, menor o igual que 10.
Si el número es menor a 10 debe imprimir "El número es menor que 10".
Si el número es mayor a 10 debe imprimir "El número es mayor que 10".
Si el número es igual a 10 debe imprimir "El número es igual a 10".*/

let userNumber = parseInt(prompt("Por favor digite el número: "));

if (userNumber < 10) {
  console.log("El número es menor que 10");
} else if (userNumber > 10) {
  console.log("El número es mayor que 10");
} else {
  console.log("El número es igual a 10");
}
