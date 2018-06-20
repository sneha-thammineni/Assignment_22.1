//requirements: mongoose
var mongoose = require("mongoose");

var newProduct = new mongoose.Schema({
	name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    img: String,
    price: Number,
    qty: Number
});

//create new Product class
var Product = mongoose.model('Product', newProduct);

module.exports = Product;
