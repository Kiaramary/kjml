var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const context= {
    title: kjml
    name: Kiara
    age:17
    position:'students'
    hobbies:['baskedball','music','movies']

  res.render('index', { title: 'Express' });
});

module.exports = router;
