const express = require('express');

const app = express();
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./api/db');

// Use morgan to log request in dev mode
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.set('view engine', 'html');

const port = 5000;
app.listen(port); // Listen on port defined in config file

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

// Routes
const Auth = require('./api/controllers/auth');

app.use('/', Auth);

