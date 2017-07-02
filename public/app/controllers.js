angular.module('myCtrls', ['somethingServices'])
    .controller('FighterCtrl', ['$scope', '$http', function($scope, $http) {
        $http({
            url: 'http://ufc-data-api.ufc.com/api/v3/iphone/fighters/',
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
    $http({
        url: 'http://ufc-data-api.ufc.com/api/v1/us/news',
    }).then(function sucess(req) {
        console.log('fighters news', req)
        $scope.news = req.data;
    }).catch(function error(err) {
        console.log('err', err)
    });
}])
.controller('EventsCtrl', ['$scope', '$http', function($scope, $http) {
        $http({
            url: 'http://ufc-data-api.ufc.com/api/v1/us/events'
        }).then(function success(req) {
            $scope.events = req.data
            console.log('events', req)
        }).catch(function error(err) {
            console.log(err);
        });
    }])
    .controller('GirlCtrl', ['$scope', '$http', function($scope, $http) {
        $http({
            url: 'http://ufc-data-api.ufc.com/api/v3/iphone/octagon_girls'
        }).then(function success(req) {
            $scope.girls = req.data
            console.log('girls', req)
        }).catch(function error(err) {
            console.log(err);
        });
    }])
    .controller('HomeCtrl', ['$scope', function($scope) {
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
        var slides = $scope.slides = [];
        var currIndex = 0;

        $scope.addSlide = function() {
            var newWidth = 600 + slides.length + 1;
            slides.push({
                image: '//unsplash.it/' + newWidth + '/300',
                text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][slides.length % 4],
                id: currIndex++
            });
        };

        $scope.randomize = function() {
            var indexes = generateIndexesArray();
            assignNewIndexesToSlides(indexes);
        };

        for (var i = 0; i < 4; i++) {
            $scope.addSlide();
        }

        // Randomize logic below

        function assignNewIndexesToSlides(indexes) {
            for (var i = 0, l = slides.length; i < l; i++) {
                slides[i].id = indexes.pop();
            }
        }

        function generateIndexesArray() {
            var indexes = [];
            for (var i = 0; i < currIndex; ++i) {
                indexes[i] = i;
            }
            return shuffle(indexes);
        }

        // http://stackoverflow.com/questions/962802#962890
        function shuffle(array) {
            var tmp, current, top = array.length;

            if (top) {
                while (--top) {
                    current = Math.floor(Math.random() * (top + 1));
                    tmp = array[current];
                    array[current] = array[top];
                    array[top] = tmp;
                }
            }

            return array;
        }
    }])
