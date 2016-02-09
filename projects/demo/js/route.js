app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {

  $routeProvider.when("/demo1", Route.ng("demo.html", "DemoController1", ["Admin"]));
  $routeProvider.when("/demo2", Route.ng("demo.html", "DemoController2", ["Admin"]));
  $routeProvider.when("/demo3", Route.ng("demo.html", "DemoController3", ["Admin"]));

}]);
