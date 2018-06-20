// REQUIREMENTS

//require express, mongoose, Product schema, user
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Product = require("../models/products.js");
var User = require("../models/users.js");


//======================
// INDEX
//======================
router.get('/', function(req, res) {
    Product.find({}, function(err, product) {
        res.render("products/index.hbs", {
            product: product
        });
    });
});



//======================
// NEW
//======================
router.get('/new', function(req, res) {
    res.render("products/new.hbs");
});

//======================
// SHOW
//======================
// this is for user /check out
router.get('/user', function(req, res) {

    User.findOne({ username: "Sneha" }, function(err, user) {
        console.log("found the user: ", user);
        res.render("users/user.hbs", {
            user: user
        });

        // // saving a user into db
        // var newUser = new User({
        //     username: "Sneha",
        //     shopping_cart: []
        // });

        // console.log(newUser);

        // newUser.save(function(err, user) {

        // })
    });
});

// this is for each Products page
router.get('/:id', function(req, res) {
    Product.findById(req.params.id, function(err, product) {
        console.log("found products");
        res.render("products/show.hbs", {
            product: product
        });
    });
});

//======================
// CREATE
//======================
router.post('/', function(req, res) {

    console.log(req.body);

    var newProduct = new Product(req.body);
    newProduct.save(function(err, data) {
        res.redirect('/');
    });
});

//======================
// EDIT
//======================
router.get('/:id/edit', function(req, res) {
    Product.findById(req.params.id, function(err, product) {
        res.render("products/edit.hbs", {
            product: product
        });
    });
});

//======================
// UPDATE
//======================
// Click BUY will: update product.qty and push into user.shopping_cart
router.put("/:id", function(req, res) {
    req.body.qty = (req.body.qty - 1);
    Product.findByIdAndUpdate(req.params.id, req.body, function(err, product) {
        console.log(product);
        User.findOneAndUpdate({ username: "Christine" }, { $push: { shopping_cart: product.name } },
            function(err, data) {
                res.redirect('/' + req.params.id);
            });
    });
});



//======================
// DELETE
//======================
router.delete('/:id', function(req, res) {
    Product.findByIdAndRemove(req.params.id, function(err, product) {
        res.redirect('/');
    });
});

//======================
// EXPORTS
//======================
module.exports = router;