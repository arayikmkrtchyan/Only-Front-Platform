app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {

  $routeProvider.when('/sign-in',       {templateUrl: 'html/sign-in.html',       controller: 'LoginController', roles: ['Guest']});
  $routeProvider.when('/sign-up',       {templateUrl: 'html/sign-up.html',       controller: 'LoginController', roles: ['Guest']});
  $routeProvider.when('/access-denied', {templateUrl: 'html/access-denied.html' });
  $routeProvider.when('/error-404', {templateUrl: 'html/error/404.html' });

}]);

