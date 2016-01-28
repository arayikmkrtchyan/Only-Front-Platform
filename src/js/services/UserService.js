'use strict';

function UserService($http) {

  this.$http = $http;
  this.serviceName = 'user';

  this.getUserData = function () {
    return this.send({
      method: 'GET',
      url: 'get-user-data'
    });
  };

  this.login = function () {
    return this.send({
      url: 'login'
    });
  };

}

// extends and register service
UserService.$inject = ['$http'];
UserService.prototype = Object.create(Connector.prototype);
UserService.prototype.constructor = UserService;
app.service('UserService', UserService);