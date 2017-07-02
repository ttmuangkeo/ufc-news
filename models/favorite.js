// var mongoose = require('mongoose');
// var bcrypt = require('bcrypt');

// var FavoriteSchema = mongoose.Schema({
//     name: String,
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });

// FavoriteSchema.set('toJSON', {
//     transform: function(doc, ret, options) {
//         var returnJson = {
//             id: ret._id,
//             email: ret.email,
//             name: ret.name
//         };
//         return returnJson;
//     }
// });

// FavoriteSchema.methods.authenticated = function(password) {
//     var user = this;
//     var isAuthenticated = bcrypt.compareSync(password, user.password);
//     return isAuthenticated ? user : false;
// };

// FavoriteSchema.pre('save', function(next) {
//     if (!this.isModified('password')) {
//         next();
//     } else {
//         this.password = bcrypt.hashSync(this.password, 10);
//         next();
//     }
// });

// module.exports = mongoose.model('Favorite', FavoriteSchema);
