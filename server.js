// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var bodyParser = require('body-parser');
//
// var book = require('./api/routes/book');
// var app = express();
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({'extended':'false'}));
// app.use(express.static(path.join(__dirname, 'dist')));
// app.use('/books', express.static(path.join(__dirname, 'dist')));
// app.use('/book', book);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });
//
// module.exports = app;


let express = require('express');
let morgan = require('morgan');
let path = require('path');
let app = express();
let bodyParser = require('body-parser');

// var mongoose = require('mongoose')


// Require configuration file defined in app/Config.js
// var config = require('./app/Config')

// Connect to database
// mongoose.connect(config.DB)

// Sends static files  from the public path directory
app.use(express.static(path.join(__dirname, '/public')))

// Use morgan to log request in dev mode
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

let port = 5000
app.listen(port) // Listen on port defined in config file
console.log('App listening on port ' + port)

// var todoRoutes = require('./app/Routes')

//  Use routes defined in Route.js and prefix it with api
// app.use('/api', todoRoutes)

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + port)

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

    // Pass to next layer of middleware
    next()
})
// Server index.html page when request to the root is made
app.get('/', function (req, res, next) {
    console.log(res);
    res.send('Hello world')
})