/**
 * Created by adebayooluwadamilola on 7/5/18.
 */
const mongoose = require('mongoose');
const config = require('config');
const bluebird = require('bluebird');

console.log(config.get('database.url'));

// mongoose.connect('mongodb://root:1!lizzyayobami@ds115420.mlab.com:15420/xando', { useNewUrlParser: true, promiseLibrary: require('bluebird') })
mongoose.connect(config.get('database.url'), { useNewUrlParser: true, promiseLibrary: bluebird })
	.then(() => console.log('connection successful'))
	.catch(err => console.error(err));
