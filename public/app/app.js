var app = angular.module('App', ['ui.router', 'ui.bootstrap', 'myCtrls']);


app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/404');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/views/home.html',
            controller: 'HomeCtrl'
        })
        .state('fighters', {
            url: '/fighters',
            templateUrl: 'app/views/fighters.html',
            controller: 'FighterCtrl'
        })
        .state('news', {
            url: '/news',
            templateUrl: 'app/views/news.html',
            controller: 'NewsCtrl'
        })
        .state('events', {
            url: '/events',
            templateUrl: 'app/views/events.html',
            controller: 'EventsCtrl'
        })
        .state('girls', {
            url: '/girls',
            templateUrl: 'app/views/girls.html',
            controller: 'GirlCtrl'
        })

    $locationProvider.html5Mode(true);
}]);
//4. you should be able to login and be persistent. auth user instead of giving a 404 error
// .config(['$httpProvider', function($httpProvider) {
//add the AuthInterceptor in the list of interceptors
//use the interceptor to add on the token from the service factory
// $httpProvider.interceptors.push('AuthInterceptor')
// }]);
