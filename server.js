import express from 'express';
import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import db from './api/db';

const app = express();

// Use morgan to log request in dev mode
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));
app.set('view engine', 'html');

const port = 5000;
if (!module.parent) {
	app.listen(port);
	console.log('listening on port 5000');
}

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	next();
});

// Routes
const Auth = require('./api/controllers/auth');
const User = require('./api/controllers/usercontroller');

app.use('/', Auth);
app.use('/users', User);

module.exports = app;

