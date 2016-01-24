app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {

  $routeProvider.when('/demo1', {templateUrl: 'templates/demo.html', controller: 'DemoController', roles: ['Admin']});
  $routeProvider.when('/demo2', {templateUrl: 'templates/demo.html', controller: 'DemoController', roles: ['Admin']});
  $routeProvider.when('/demo3', {templateUrl: 'templates/demo.html', controller: 'DemoController', roles: ['Admin']});


}]);
