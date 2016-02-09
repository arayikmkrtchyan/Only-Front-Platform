app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {

  Route.addToRoutesList("sign-in",       Route.ng("sign-in.html"    , "LoginController", ["Guest"]));
  Route.addToRoutesList("access-denied", Route.ng("access-denied.html", "", []));
  Route.addToRoutesList("error-404",     Route.ng("error/404.html"  , "", []));

  $routeProvider.when("/sign-in",       Route.getFromRoutesList("sign-in") );
  $routeProvider.when("/access-denied", Route.getFromRoutesList("access-denied") );
  $routeProvider.when("/error-404",     Route.getFromRoutesList("error-404") );
  $routeProvider.when("/sign-up",       Route.ng("sign-up.html" , "LoginController", ["Guest"]) );

}]);

