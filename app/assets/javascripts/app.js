var app = angular.module('educacao', ['ngResource', 'ngSanitize', 'ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'home.html'
            }).
            when('/students', {
                templateUrl: '/students/index.html'
            }).            
            when('/courses', {
                templateUrl: '/courses/index.html'
            }).
            when('/classrooms', {
                templateUrl: '/classrooms/index.html'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);