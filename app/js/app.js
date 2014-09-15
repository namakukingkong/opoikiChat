var app = angular.module('qischat', []);
   
      console.log("aa");

app.controller('authController', function($scope) {
  $scope.name = 'World';

  $scope.myusers = [{
    username: 'user1',
    password: '12323'
  }, {
    username: 'user2',
    password: '12323'
  }];
  $scope.submit = function() {
      console.log("bb");
    if ($scope.username=="omayib" && $scope.password=="1234") {
      var user = $scope.username;
      var pass = $scope.password;
 
      $scope.loginResult="success";
      $scope.myusers.push({
        username: user,
        password: pass
      });
    } else {
      $scope.loginResult="failed";
    }
  }

});