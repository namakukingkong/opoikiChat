'use strict';

/* Controllers */

var chat = angular.module('chatControllers', []);
console.log("call chatControllers")
chat.controller('AuthController', ['$scope', '$http', '$location','request',
    function($scope,$http,$location,request) {
        $scope.goLogin = function (u,p) {
            console.log(u);
            console.log(p);
            // request.login(u,p);
            $location.path('/home');
        }
    }]);

chat.controller('HomeController', ['$scope', '$http','request',
    function($scope, $http,request) {
           $scope.rooms=request.rooms();
    }]);