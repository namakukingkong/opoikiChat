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
         $scope.names="hahaha";
         $scope.getComments = function (topicid) {
            console.log("TopicController topik id.."+topicid);

            request.commentLoad(365,365).then(
                function(res){
                    // for (var i = 0; i < res.results.comments.length; i++) {
                    //  console.log(res.results.comments[i].message);
                    // };
                    $scope.comments=res.results.comments;
              });
        }
        $scope.submit = function() {
            if ($scope.text) {
                console.log("send message : "+$scope.text);

            }
        };

    },  
         
    ]);

chat.controller('TopicController', ['$scope', '$http','request',
    function($scope, $http,request) {
       
        $scope.getComments = function (topicid) {
            $scope.names= "h3kwq";
            console.log("TopicController topik id.."+topicid);

            // $scope.comments=request.commentLoad(365,365).then(
            //     function(res){
            //         // for (var i = 0; i < res.results.comments.length; i++) {
            //         //  console.log(res.results.comments[i].message);
            //         // };
            //         return res.results.comments;

            //   });
        }
    }]);