/* Escribe un programa que:
Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
Elimine el segundo elemento.
Recorra e imprima el arreglo.
Ejemplo:
Ingresa un número> 5
1
3
4
5
Nota: los 3 pasos de este ejercicio se deben realizar con programación según lo visto en clase. */
let userNumber = parseInt(prompt("Por favor digite el número: "));
const arrayNumbers = []

console.log('El array final es: ')
for (i = 1; i <= userNumber; i++) {
  arrayNumbers.push(i)
}
arrayNumbers.splice(1, 1)
for (let z = 0; z < arrayNumbers.length; z ++) {
  console.log(arrayNumbers[z]);
}
