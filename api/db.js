/**
 * Created by adebayooluwadamilola on 7/5/18.
 */
const mongoose = require('mongoose');

mongoose.connect('mongodb://root:1!lizzyayobami@ds115420.mlab.com:15420/xando', { useNewUrlParser: true, promiseLibrary: require('bluebird') })
  .then(() => console.log('connection succesful'))
  .catch(err => console.error(err));
