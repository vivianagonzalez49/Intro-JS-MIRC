/* Una función nos permite reutilizar el código que escribimos.
Es un bloque de código que ejecuta una tarea de rutina usando una serie de instrucciones

Ejemplos:
printThanks: imprime un mensaje fijo cada vez que la función se ejecuta. Es decir, si yo llamo la función siempre me va a mostrar los mensajes dentro de esta
computePrice: devuelve un resultado personalizado basado en los datos de entrada proporcionados para el cálculo.  */

function printThanks() {
  console.log('Thanks for shopping!')
  console.log('Discounts expire Dec 1!')
}

function computePrice(cost, discount) {
  let reduction = cost*discount
  console.log('You saved $'+reduction)
  return cost-reduction;
}

/* Por qué son útiles las funciones?  */


