var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home');
});
router.get('/', function(req, res, next) {
  res.render('auth/login.ejs');
});
router.get('/cart', function(req, res, next) {
  res.render('cart');
});
router.get('/login', function(req, res, next) {
  res.render('auth/login');
});
router.get('/cart', function(req, res, next) {
  res.render('cart');
});



module.exports = router;
