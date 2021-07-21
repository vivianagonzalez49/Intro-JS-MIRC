//pide la frase al user
const phrase = prompt('Por favor ingrese la frase: ')

/* seaparar el texto en palabras */
const words = phrase.split(' ') //se separan las palabras por los espacios ' ' la primera letra va después de un espacio
const newText = [] //lo que hace es organizar e ingresar todo al arreglo para que me muestre en una línea

/* recorro el array de palabras */
for (let word of words) { //recorro array de palabras y construyo nuemavemente una palabra
  /* obtener el primer caracter o letra de la palabra */
  const firstLetter = word[0] //obterner la primera letra de la palabra
  /* inicializo una variable con la primera letra en mayúscula */
  let newWord = firstLetter.toUpperCase() //y le digo que la ponga mayúscula

  /* recorro el resto de la palabra (comenzando en la posición 1) */
  for (let i = 1; i < word.length; i++) { //recorro la longitud del array y se inicia en 1 ya que ya obtuve la primera posición de esa palabra y necesito la siguiente
    const element = word[i]
    /* concatenar a la variable los otros caracteres */
    newWord += element //en la oración se empieza a recorrer
  }
  
  newText.push(newWord) //push significa agregar
}
/* mostrar el mensaje uniéndolo con un espacio */
console.log(newText.join(' '))//entonces join dice que una todos los arreglos pero con espacios ' '. .join agrega todos los elementos de un array en un cadena string separados por el valor especificado, en este caso, un espacio
