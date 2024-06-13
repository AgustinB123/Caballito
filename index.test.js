

const ftest = require('./utils/firstTest'); // Importa la función firstTest

describe('initial', () => {                 // Define un bloque de pruebas
  test('first tests', () => {               // Define una prueba
    expect(ftest()).toBe(true);            // Verifica que el resultado de firstTest() sea false    //false
  });
});

//Usa Jest para verificar que las funciones en tu aplicación funcionan como se espera.



/*

// esto rompe todo el codigo

const ftest = require('./utils/firstTest'); // Importa la función firstTest

describe('initial', () => {                 // Define un bloque de pruebas
  test('first tests', () => {               // Define una prueba
    expect(ftest()).toBe(true);            // Verifica que el resultado de firstTest() sea false
  });
});

*/