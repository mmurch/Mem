var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var reactTools = require('react-tools');
//var stripBom = require('strip-bom');
//var fs = require('fs');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
//
//_.each(fs.readdirSync(path.join(__dirname, 'public', 'javascripts', 'src')), function(jsx){
//    var jsFileName = jsx.substr(0, template.lastIndexOf(".")) + '.js',
//        fileContents = stripBom(fs.readFileSync(path.join(__dirname, 'public', 'javascripts', 'src', jsx), "utf8"));
//
//    fs.writeFileSync(path.join(__dirname, 'public', 'javascripts', 'build', jsFileName),
//        reactTools.transform(fileContents));
//});


var server = app.listen(3000, function () {
  console.log('Memory game app started');
});


module.exports = app;
