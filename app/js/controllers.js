'use strict';

/* Controllers */

var chat = angular.module('chatControllers', []);
console.log("call chatControllers")
chat.controller('AuthController', ['$scope', '$http', '$location',
    function($scope,$http,$location) {
        $scope.goLogin = function (u,p) {
            console.log(u);
            console.log(p);
            $location.path('/home');
        }
    }]);

chat.controller('HomeController', ['$scope', '$http',
    function($scope, $http) {
        $scope.goLogin = function () {
            console.log("submit")
        }
    }]);