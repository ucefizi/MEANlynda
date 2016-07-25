var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/create', function (req, res, req) {
	var vm = {
		title: 'Create an account'
	};
	res.render('users/create');
})

module.exports = router;
