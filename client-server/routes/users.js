var express = require('express');

var assert = require('assert')

var restify = require('restify-clients');

var router = express.Router();

//creates a JSON client
var client = restify.createJsonClient({
    url: 'http://localhost:4000'
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  
    client.get('/users', function (err, request, response, obj) {
      assert.ifError(err);

      res.json(obj);
    });
});

//find one através do ID
router.get('/:id', function(req, res, next) {
  
  client.get(`/users/${req.params.id}`, function (err, request, response, obj) {
    assert.ifError(err);

    res.json(obj);;
  });
});

//edit com o metódo DELETE
router.put('/:id', function(req, res, next) {
  
  client.put(`/users/${req.params.id}`, req.body, function (err, request, response, obj) {
    assert.ifError(err);

    res.json(obj);;
  });
});

//delete com metodo DELETE
router.delete('/:id', function(req, res, next) {
  
  client.del(`/users/${req.params.id}`, function (err, request, response, obj) {
    assert.ifError(err);

    res.json(obj);;
  });
});

//Cadastro novo com metodo POST
router.post('/', function(req, res, next) {
  
  client.post(`/users`, req.body, function (err, request, response, obj) {
    assert.ifError(err);

    res.json(obj);;
  });

});

module.exports = router;