//======================
// REQUIREMENTS
//======================
//require express, mongoose, Product schema, user
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Product = require("../models/products.js");


router.get('/newproducts', function(req, res) {

	var newProducts = [
			{
					name: "Sprinkles",
					description: "A lotta sprinkles, a lotta yum.",
					img: "https://dummyimage.com/600x400/000/fff",
					price: 5,
					qty: 99
			}, {
					name: "Plain Ole Product",
					description: "Plain donut for plain people.",
					img: "https://dummyimage.com/600x400/000/fff",
					price: 25,
					qty: 15
		}, {
					name: "Chocolate",
					description: "Chocolate Product nom nom nom",
					img: "https://dummyimage.com/600x400/000/fff",
					price: 7000,
					qty: 1
		}, {
					name: "Product Holes",
					description: "For the snackers.",
					img: "https://dummyimage.com/600x400/000/fff",
					price: 10,
					qty: 23
		}
	];


  Product.create(newProducts, function(err) {
        console.log("SEED: NEW PRODUCTS CREATED!");
        res.redirect('/');
  });

});

//======================
// EXPORTS
//======================
module.exports = router;
