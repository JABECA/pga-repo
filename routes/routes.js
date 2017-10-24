var express = require('express');
var router = express.Router();
var passport = require('passport');
var controllers = require('.././controllers');

router.get('/', controllers.HomeController.inicio);

//rutas de usuario
router.get('/auth/signup', controllers.UserController.getSignUp);
router.post('/auth/signup', controllers.UserController.postSignUp);
router.get('/auth/signin', controllers.UserController.getSignIn);
router.post('/auth/signin', passport.authenticate('local', {
	successRedirect : '/',
	failureRedirect : '/auth/signin',
	failureFlash : true
}));

module.exports = router;
