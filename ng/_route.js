app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {


  $routeProvider.when('/demo', {templateUrl: 'templates/demo.html', controller: 'DemoController'});


  //$locationProvider.html5Mode(true);

}]);
