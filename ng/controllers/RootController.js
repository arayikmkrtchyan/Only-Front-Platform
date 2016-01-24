'use strict';

function RootController($rootScope, UserService) {
  $rootScope.completed = false;
  $rootScope.title = "";
  $rootScope.userData = null;

  UserService.subscribe('get-user-data.success', function(data){
    $rootScope.userData = data;
    $rootScope.completed = true;
  });

  UserService.getUserData();
}

// register controller
RootController.$inject = ['$rootScope', 'UserService'];
app.controller('RootController', RootController);