//Archivo principal de configuración de tu aplicación Express. Configura middleware, rutas y manejo de errores.

var createError = require('http-errors');       // Importa el módulo para crear errores HTTP
var express = require('express');               // Importa el módulo Express
var path = require('path');                     // Importa el módulo path para manejar rutas de archivos
var cookieParser = require('cookie-parser');    // Importa el módulo cookie-parser para manejar cookies
var logger = require('morgan');                 // Importa el módulo morgan para el registro de solicitudes HTTP

var indexRouter = require('./routes/index');    // Importa el enrutador de rutas para la página principal
var usersRouter = require('./routes/users');    // Importa el enrutador de rutas para los usuarios

var app = express();                            // Crea una aplicación Express

// Configuración del motor de vistas
app.set('views', path.join(__dirname, 'views'));  // Configura el directorio de vistas
app.set('view engine', 'ejs');                    // Configura el motor de vistas como EJS

app.use(logger('dev'));                           // Usa morgan para registrar solicitudes HTTP
app.use(express.json());                          // Usa el middleware para parsear JSON
app.use(express.urlencoded({ extended: false })); // Usa el middleware para parsear datos URL-encoded
app.use(cookieParser());                          // Usa el middleware para parsear cookies
app.use(express.static(path.join(__dirname, 'public'))); // Configura el directorio de archivos estáticos

app.use('/', indexRouter);                        // Usa el enrutador de la página principal para las solicitudes a '/'
app.use('/users', usersRouter);                   // Usa el enrutador de usuarios para las solicitudes a '/users'

// Captura 404 y reenvía al manejador de errores
app.use(function(req, res, next) {
  next(createError(404));                         // Crea un error 404 y pasa al siguiente middleware
});

// Manejador de errores
app.use(function(err, req, res, next) {
  // Configura locales, solo proporcionando errores en desarrollo
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Renderiza la página de error
  res.status(err.status || 500); // Configura el estado HTTP
  res.render('error'); // Renderiza la vista 'error'
});

module.exports = app; // Exporta la aplicación
