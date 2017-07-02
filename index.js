require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


// // JSON web token dependencies, including a secret key to sign the token
// var expressJWT = require('express-jwt');
// var jwt = require('jsonwebtoken');
// var secret = process.env.JWT_SECRET;
// var spotifyApi = new SpotifyWebApi();

var app = express();

// // mongoose models and connection
// var mongoose = require('mongoose');
// var Favorite = require('./models/favorite');
// mongoose.connect('mongodb://localhost/lyrical'); //connect to your database name

// // decode POST data in JSON and URL encoded formats
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(require('morgan')('dev'));


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
