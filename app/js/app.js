var app = angular.module('qischat', []);
   
      console.log("aa");

app.controller('authController', function($scope,request) {
  $scope.name = 'World';

  $scope.myusers = [{
    username: 'user1',
    password: '12323'
  }, {
    username: 'user2',
    password: '12323'
  }];
 /* $scope.submit = function() {
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
  }*/
  $scope.login = function(username, password) {
    console.log(username);
    console.log(password);
    request.make({method: 'POST', endpoint:'/users/sign_in.json', data:{username: username, password: password}})
      .success(function(data, status, headers, config) {
        console.log(data, status, headers, config);
      }).error(function(data, status, headers, config) {
        console.log(data, status, headers, config);
      });
  }

});
/*var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope, request) {
  $scope.login = function(username, password) {
    request.make({method: 'POST', endpoint: 'user', data:{username: username, password: password}})
      .success(function(data, status, headers, config) {
        console.log(data, status, headers, config);
      }).error(function(data, status, headers, config) {
        console.log(data, status, headers, config);
      });
  }
});
*/