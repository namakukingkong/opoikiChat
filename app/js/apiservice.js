app.service('request', ['$http', function($http) {
 var Request = function() {
    // Convenience helpers
    // this.endpoints = {
    //    signup: '/users.json',
    //    signin: '/users/sign_in.json',
    //    rooms:'/api/v1/mobile/rooms?token='
    // };
    this.endpoints = {
       user: 'user/a',
       login: 'user/login'
    };
    this.apiBase = 'https://www.qisc.us';

    this.make = function(options) {
       var url = this.apiBase;

      // resolve URL
      if(this.endpoints.hasOwnProperty(options.endpoint)) {
        url += this.endpoint;
      }
  
      // return a new request object
      return new XHR(url, options);
    }
    return this;
  };

  // Our XHR object. This one gets a new instance with every request.
  var XHR = function(url, opts) {
    return $http({method: opts.method, url: url, data: opts.data});
  }
  // This only gets called once
  return new Request();
}]);