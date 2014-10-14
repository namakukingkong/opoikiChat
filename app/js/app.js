'use strict';

/* App Module */

var qischatMod = angular.module('qischat', [
    'ngRoute',
    'ngCookies',
    'chatControllers'
]);

qischatMod.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/login', {
                templateUrl: '../views/auth.html',
                controller: 'AuthController'
            }).
            when('/home', {
                templateUrl: '../views/main.html',
                controller: 'HomeController'
            }).
            otherwise({
                redirectTo: '/login'
            });
    }]);

