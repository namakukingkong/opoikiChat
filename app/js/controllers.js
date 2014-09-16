'use strict';

/* Controllers */
var r;

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
            //r=request.rooms();
            console.log("result:");
            request.rooms()
              .then(
                function(res){
                  $scope.rooms=res.results.rooms;
              });
            console.log("end result:");       //  $scope.rooms=request.rooms().data.results.rooms;
    }]);