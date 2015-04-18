var express = require('express');


module.exports = function(templates){
  var router = express.Router();

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', {
      title: 'Game of Memory',
      templates: templates
    });
  });

  return router;
};
