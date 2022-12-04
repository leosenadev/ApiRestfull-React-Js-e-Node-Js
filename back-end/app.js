var express = require('express');
var cors = require('cors');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//Corrige o problema de CORS
const corsOptions = {
  origin: '*',
  method:'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  exposedHeaders:[
    'Autorization',
    'X-Requested-With',
    'Content-Type',
     ],
  preflightContinue:false,

};
app.use(cors(corsOptions))

app.use('/', indexRouter);

app.use('/clientes', indexRouter);
app.use('/cliente', indexRouter);

app.use('/oportunidades', indexRouter);

app.use('/update', indexRouter);


module.exports = app;
