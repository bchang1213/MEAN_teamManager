var controller = require('../controllers/players.js');
var path = require('path');
var fs = require('fs');

module.exports = function(app) {
	app.get('/notes', function (request, response) {
		controller.show(request, response);
	})

	app.post('/create', function(request, response){
		controller.create(request, response);
	})

	app.all("*", (req,res,next) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
	});
}