var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var stripBom = require('strip-bom');
var _ = require('underscore');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('hogan-express'));

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// prep shared templates for client with hogan
var hogan = require('hogan');

var views = _.map(fs.readdirSync(path.join(__dirname, 'views', 'shared')), function(template){
    var templateName = template.substr(0, template.lastIndexOf(".")),
        fileContents = stripBom(fs.readFileSync(path.join(__dirname, 'views', 'shared', template), "utf8"));
    return {
        name: templateName,
        template: hogan.compile(fileContents, { asString: true })
    }
});

var routes = require('./routes/index')(views);

app.use('/', routes);


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



var server = app.listen(3000, function () {
    console.log('Memory game app started');
});


module.exports = app;
