// Create all the functions that will do all the routing in the app

var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res) {
    res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
    cat.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/burgers/create', function(req, res) {
    burgers.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function() {
        res.redirect('/burgers');
    });
});

router.put('/burgers/update/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    console.log('condition', condition);

    burgers.update({
        devoured: req.body.devoured
    }, condition, function() {
        res.redirect('/burgers');
    });
});

module.exports = router;
