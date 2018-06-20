//requirements: mongoose
var mongoose = require("mongoose");

var newUser = new mongoose.Schema({
	username: {type: String, unique: true},
	shopping_cart: []
});

//create new Product class
var User = mongoose.model('User', newUser);

module.exports = User;
