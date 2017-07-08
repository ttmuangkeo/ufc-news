angular.module('myCtrls', ['somethingServices'])
    .controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
        $http({
            url: 'https://ufc-data-api.ufc.com/api/v3/iphone/fighters/title_holders'
        }).then(function success(res) {
            $scope.title = res.data
            console.log(res)
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
            }
        ];

    }])
    .controller('FighterCtrl', ['$scope', '$http', function($scope, $http) {
        $http({
            url: 'https://ufc-data-api.ufc.com/api/v3/iphone/fighters/',            
        }).then(function success(req) {
            console.log('are these my fight2ers?', req.data)
            $scope.fighters = req.data
        }).catch(function error(err) {
            console.log(err);
        });
        $scope.search = function(id) {
            console.log('yea bro', id)
        }
    }])
    .controller('NewsCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.myInterval = 2000;
                $scope.noWrapSlides = false;
        $scope.active = 0;
        $http({
            url: 'https://ufc-data-api.ufc.com/api/v1/us/news',
        }).then(function sucess(req) {
            console.log('fighters news', req)
            $scope.news = req.data;
        }).catch(function error(err) {
            console.log('err', err)
        });
    }])
    .controller('EventsCtrl', ['$scope', '$http', function($scope, $http) {
        $http({
            url: 'https://ufc-data-api.ufc.com/api/v1/us/events'
        }).then(function success(req) {
            $scope.events = req.data
            console.log('events', req)
        }).catch(function error(err) {
            console.log(err);
        });
    }])
    .controller('GirlCtrl', ['$scope', '$http', function($scope, $http) {
        $http({
            url: 'https://ufc-data-api.ufc.com/api/v3/iphone/octagon_girls'
        }).then(function success(req) {
            $scope.girls = req.data
            console.log('girls', req)
        }).catch(function error(err) {
            console.log(err);
        });
    }])
