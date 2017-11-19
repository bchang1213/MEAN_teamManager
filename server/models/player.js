// require mongoose
var mongoose = require('mongoose');

// create the schema
var PlayerSchema = new mongoose.Schema({
	name: {type: String, required:true, minlength:3},
	position: {type:String, required:true, minlength:3},
	game1: {type: Boolean, required: true},
	game2: {type: Boolean, required: true},
	game3: {type: Boolean, required: true}
},{timestamps:true});
// register the schema as a model
var Player = mongoose.model('Player', PlayerSchema);