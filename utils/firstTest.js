const oneTest = require('./oneTest');   // Importa la función oneTest

function firstTest() {
  return oneTest(4);                    // Llama a la función oneTest con el argumento 4
}

module.exports = firstTest;             // Exporta la función firstTest


//Contiene una función que realiza una prueba usando otra función de un archivo diferente (oneTest.js)