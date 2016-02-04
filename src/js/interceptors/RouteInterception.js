function RouteInterception($rootScope, $route, $location, UserService) {

  var inReload = false;

  function setRoute(key) {
    if($route.routes[key]) {
      var routes = angular.copy($route.routes);
      var k;
      for(k in $route.routes) {
        if($route.routes.hasOwnProperty(k)) {
          delete $route.routes[k];
        }
      }
      $route.routes[null] = routes[key];
      inReload = true;
      $route.reload();
      $rootScope.$evalAsync(function() {
        for(k in routes) {
          if(routes.hasOwnProperty(k)) {
            $route.routes[k] = routes[k];
          }
        }
        inReload = false;
      });
    }
  }

  function isShowPage(roles, role) {
    if (roles.length && roles.indexOf(role) == -1) {
      if (role == "Guest") {
        setRoute("/sign-in");
        return false;
      } else {
        setRoute("/access-denied");
        return false;
      }
    }
    if(!$route.current) {
      setRoute("/error-404");
    }
    return true;
  }

  function initRouteRoleHandler(roles) {
    if ($rootScope.userData) {
      isShowPage(roles, $rootScope.userData.role);
    } else {
      UserService.subscribe('get-user-data.success', function (data) {
        if (!roles) {
          roles = ($route.current && $route.current.$$route.roles) ? $route.current.$$route.roles : [];
        }
        if(isShowPage(roles, data.role)) {
          $location.path($location.path());
        }
      });
    }
  }

  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    if(!inReload) {
      var roles = next.roles || [];

      console.log('$routeChangeStart');
      initRouteRoleHandler(roles);
    }
  });

  initRouteRoleHandler();
}

// Register
RouteInterception.$inject = ['$rootScope', '$route', '$location', 'UserService'];
app.run(RouteInterception);
