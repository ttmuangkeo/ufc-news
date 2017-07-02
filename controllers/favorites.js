// var express = require('express');
// var SpotifyWebApi = require('spotify-web-api-node')
// var Favorite = require('../models/favorite');
// var router = express.Router();
// var spotifyApi = new SpotifyWebApi();

// router.route('/')
//   .get(function(req, res) {
//     Favorite.find(function(err, users) {
//       if (err) return res.status(500).send(err);

//       return res.send(users);
//     });
//   })
//   .post(function(req, res) {
//     // find the user first in case the email already exists
//     Favorite.findOne({ email: req.body.email }, function(err, user) {
//       if (user) return res.status(400).send({ message: 'Email already exists' });

//       Favorite.create(req.body, function(err, user) {
//         if (err) return res.status(500).send(err);

//         return res.send(user);
//       });
//     });
//   });

// router.get('/:id', function(req, res) {
//   Favorite.findById(req.params.id, function(err, user) {
//     if (err) return res.status(500).send(err);

//     return res.send(user);
//   });
// });




// module.exports = router;
