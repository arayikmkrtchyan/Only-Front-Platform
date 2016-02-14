'use strict';

UserService.event = {
  getUserData : "get-user-data"
};

UserService.$inject = ['$http'];
function UserService($http) {

  this.$http = $http;
  this.serviceName = 'user';

  this.getUserData = function () {
    return this.send({
      eventName: UserService.event.getUserData,
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
UserService.prototype = Object.create(Connector.prototype);
UserService.prototype.constructor = UserService;
app.service('UserService', UserService);