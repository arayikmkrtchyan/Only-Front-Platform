function RouteInterception($rootScope, $route, $location, UserService) {

  function isShowPage(roles, role) {
    if (roles.length && roles.indexOf(role) == -1) {
      if (role == "Guest") {
        $location.path("sign-in");
        return false;
      } else {
        $location.path("access-denied");
        return false;
      }
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
    var roles = next.roles || [];

    initRouteRoleHandler(roles);
  });

  initRouteRoleHandler();
}

// Register
RouteInterception.$inject = ['$rootScope', '$route', '$location', 'UserService'];
app.run(RouteInterception);
