/**/

const ftest = require('./utils/firstTest'); // Importa la función firstTest

describe('initial', () => {                 // Define un bloque de pruebas
  test('first tests', () => {               // Define una prueba
    expect(ftest()).toBe(false);            // Verifica que el resultado de firstTest() sea false
  });
});

//Usa Jest para verificar que las funciones en tu aplicación funcionan como se espera.

/*
// esta falla

const ftest = require('./utils/firstTest');

describe('initial', () => {
  test('first tests', () => {
    // Cambiar la expectativa para que falle deliberadamente
    expect(true).toBe(ftest());
  });
});

*/