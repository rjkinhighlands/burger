var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res){
	var info = {
		brgr: [],
		itm: []
};

// WIMPY BURGER TABLE //

burger.selectAll(function(data){
    for(var i=0;i<data.length; i++){
      info.brgr.push(data[i]);
  }
});

// HANDLEBARS INDEX //

	res.render('index', info);
});

router.post('/create', function(req, res){
	burger.insert([req.body.burgerInput], function(){
		res.redirect('/');
	});
});

router.put('/update/:id', function(req, res){
	burger.update([req.body.devoured], [req.params.id], function(){
		res.redirect('/');
	});
});

router.delete('/delete/:id', function(req, res){
	burger.delete([req.params.id], function(){
		res.redirect('/');
	});
});

module.exports = router;