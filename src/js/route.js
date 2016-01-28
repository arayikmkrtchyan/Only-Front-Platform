app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {

  $routeProvider.when('/sign-in',       {templateUrl: '../templates/sign-in.html',       controller: 'LoginController', roles: ['Guest']});
  $routeProvider.when('/sign-up',       {templateUrl: '../templates/sign-up.html',       controller: 'LoginController', roles: ['Guest']});
  $routeProvider.when('/access-denied', {templateUrl: '../templates/access-denied.html' });

}]);

