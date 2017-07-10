angular.module('myCtrls', ['somethingServices'])
    .controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
        $http({
            url: 'http://ufc-data-api.ufc.com/api/v3/iphone/fighters/title_holders'
        }).then(function success(res) {
            $scope.title = res.data

        }).catch(function error(err) {
            console.log(err);
        });

        $scope.myInterval = 2000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        $scope.slides = [{
            image: 'img/4.jpg'
        }, {
            image: 'img/2.jpg'
        }, {
            image: 'img/3.jpg'
        }, {
            image: 'img/5.jpg'
        }, {
            image: 'img/6.jpg'
        }, {
            image: 'img/1.jpg'
        }, {
            image: 'img/7.jpg'
        }];


    }])
    .controller('FighterCtrl', ['$scope', '$http', function($scope, $http) {
        $http({
            url: 'http://ufc-data-api.ufc.com/api/v3/iphone/fighters/',
        }).then(function success(req) {

            $scope.fighters = req.data
        }).catch(function error(err) {
            console.log(err);
        })

    }])
    .controller('NewsCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.myInterval = 2000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        $http({
            url: 'http://ufc-data-api.ufc.com/api/v1/us/news',
        }).then(function sucess(req) {

            $scope.news = req.data;
        }).catch(function error(err) {
            console.log(err)
        });
    }])
    .controller('EventsCtrl', ['$scope', '$http', function($scope, $http) {
        $http({
            url: 'http://ufc-data-api.ufc.com/api/v3/iphone/events'
        }).then(function success(req) {
            $scope.events = req.data


        }).catch(function error(err) {
            console.log(err);
        })

    }])
