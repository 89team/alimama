var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/products', function(req, res, next) {
    res.render('products', { title: 'Express' });
});

router.get('/manage', function(req, res, next) {
    res.render('manage', { title: 'Express' });
});


module.exports = router;