var mongoose = require('mongoose');

var Player = mongoose.model('Player');

module.exports = {
	show: function(request, response) {
		Player.find({}, function(error, players) {
			if(error){
				console.log("There was an error displaying all players: ", error);
			}
			else{
				console.log("retrieved players from db.");
				response.json(players);
			}
		})
	},

	create: function(request, response) {
		var player = new Player(request.body);
		console.log("made it to the create route: ",request.body);
		console.log(player.name, player.position);
		player.save(function(error) {
			if(error){
				console.log("Error saving player into DB: ", error);
				response.json(error);
			}
			else {
				console.log("new player saved into db.");
				response.json(player);
			}
		})
	}
}