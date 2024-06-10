var express = require('express'); // Importa el módulo Express
var router = express.Router();    // Crea un enrutador para manejar las rutas
const ftest = require('../utils/firstTest'); // Importa la función firstTest

/* GET home page. */
router.get('/', function(req, res, next) {   // Define la ruta para la página principal
  res.render('index', { title: 'Caballito de batalla de agusmaster' }); // Renderiza la vista 'index' con el título 'Express'
});

router.get('/test', function(req, res) { // Define la ruta para '/test'
  const r = ftest();                     // Llama a la función firstTest
  res.send({
    test: r                              // Envía la respuesta con el resultado de firstTest
  });
});

module.exports = router; // Exporta el enrutador