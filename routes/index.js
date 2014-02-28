var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	var grid = false;
	projects.grid = grid;
  	res.render('index', projects);
};

exports.viewGrid = function(req, res) {
	var grid = true;
	projects.grid = grid;
	res.render('index', projects);
};