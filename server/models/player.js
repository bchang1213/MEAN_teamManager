// require mongoose
var mongoose = require('mongoose');

// create the schema
var PlayerSchema = new mongoose.Schema({
	name: {type: String, required:true, minlength:3},
	position: {type:String, required:true, minlength:3},
	game1: {type: Boolean},
	game2: {type: Boolean},
	game3: {type: Boolean}
},{timestamps:true});
// register the schema as a model
var Player = mongoose.model('Player', PlayerSchema);