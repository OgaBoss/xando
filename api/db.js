/**
 * Created by adebayooluwadamilola on 7/5/18.
 */
const mongoose = require('mongoose');

mongoose.connect('mongodb://root:1!lizzyayobami@ds115420.mlab.com:15420/xando', { useNewUrlParser: true, promiseLibrary: require('bluebird') })
// mongoose.connect('mongodb://127.0.0.1:27017/xando', { useNewUrlParser: true, promiseLibrary: require('bluebird') })
	.then(() => console.log('connection successful'))
	.catch(err => console.error(err));
