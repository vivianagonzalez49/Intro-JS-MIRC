const randomNumber = Math.round(Math.random() * 10);
//variable auxiliar
let flag = true

while (flag) {
  let userNumber = prompt("Por favor digite el número: ")

  if (parseInt(userNumber) === randomNumber) {
    console.log('Felicitaciones, ese era!', randomNumber)
    flag = false // para terminar la ejecución
  } else {
    console.log('Lo siento, intenta nuevamente!')
  }
}

console.log('Terminó!') //si agrego esto, el false no se muestra sino este mensaje
