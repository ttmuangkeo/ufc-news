angular.module('somethingServices', ['ngResource'])
    // .factory('Auth', ['$window', function($window) {
    //     //1. in factories we just return all the functions. in this case you will return an objects of functions(token)
    //     return {
    //         saveToken: function(token) {
    //             //setting your tokens to whatever name you chose from get.
    //             $window.localStorage['secret-token'] = token;

    //         },
    //         getToken: function() {
    //             //retrieve from localstorage
    //             //save the token to whatever name you want
    //             return $window.localStorage['secret-token']

    //         },
    //         removeToken: function() {
    //             //removeItem is a function. removes the token
    //             $window.localStorage.removeItem('secret-token');
    //         },
    //         isLoggedIn: function() {
    //             //returns true or false. we can use our getoken function. check localstorage to see if you have token '?'is an else statment
    //             this.getToken();
    //             return this.getToken() ? true : false;
    //         },
    //         currentUser: function() {
    //             //call isLoggedin function, if loggedin then grab the token
    //             if (this.isLoggedin()) {
    //                 var token = this.getToken();
    //                 try {
    //                     //try executing some vulnerable code that could potentially throw an exception
    //                     //$window.atob will try to hash it for us and decode
    //                     //split by '.' turns the string into an array by the '.' = [,,]
    //                     //payload will equal whatever what was [1] is. this will be an object
    //                     var payload = JSON.parse($window.atob(token.split('.')[1]));
    //                     console.log('payload fetched and decoded');
    //                     return payload;
    //                 } catch (err) {
    //                     //any part of the payload went wrong. catch it with an error.
    //                     console.log('a bad one happened', err);
    //                     //you are trying to check the current user.
    //                     return false;

    //                 }
    //             }
    //             //if you are not logged in, then return false. if you are logged in. return payload.
    //             return false;

    //         }
    //     };
    // }]

// 3. intercepting the request. then adding the auth
// .factory('AuthInterceptor', ['Auth', function(Auth) {
//         return {
//             request: function(config) {
//                 //grab the token
//                 var token = Auth.getToken();
//                 //if we find the token
//                 if (token) {
//                     //then add to the headers and bearer. adds the auth key to the request header
//                     config.headers.Authorization = 'Bearer ' + token;
//                 }
//                 return config;
//             }
//         }
//     }])
//     //9. adding more alerts
