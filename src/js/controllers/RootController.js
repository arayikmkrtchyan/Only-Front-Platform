'use strict';

RootController.$inject = ['$rootScope', 'UserService', '$route'];
function RootController($rootScope, UserService, $route) {
  $rootScope.completed = false;
  $rootScope.title = "";
  $rootScope.userData = null;

  UserService.subscribeOnSuccess(UserService.event.getUserData, function(data){
    $rootScope.userData = data;
    Route.role = data.role;
    $route.reload();
    $rootScope.completed = true;
  });

  UserService.getUserData();
}

// register controller
app.controller('RootController', RootController);
