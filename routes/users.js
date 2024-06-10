var express = require('express'); // Importa el módulo Express
var router = express.Router();    // Crea un enrutador para manejar las rutas

/* GET users listing. */
router.get('/', function(req, res, next) { // Define la ruta para '/users'
  res.send('respond with a resource');     // Envía una respuesta simple
});

module.exports = router;                    // Exporta el enrutador
