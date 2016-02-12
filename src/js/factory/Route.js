function Route() {
}

Route.routesList = {};
Route.role = "Guest";

Route.ng = function (template, controller, roles) {

  var obj = {
    getOriginal: function () {
      var obj = this;
      if (this.roles.length && this.roles.indexOf(Route.role) == -1) {
        if (Route.role == "Guest") {
          obj = Route.getFromRoutesList("sign-in");
        } else {
          obj = Route.getFromRoutesList("access-denied");
        }
      }
      //if (!$route.current) {
      //  obj = Route.getFromRoutesList("error-404");
      // }
      if (obj && obj.original) {
        return obj.original;
      }
      return {
        template: "",
        controller: ""
      };
    },
    original: {
      template: template,
      controller: controller
    },
    roles: roles
  };

  obj.templateUrl = (function (that) {
    return function () {
      var template = that.getOriginal().template;
      if (template) {
        template = "html/" + template;
      }
      return template;
    }
  })(obj);

  obj.controller = (function (that) {
    return ["$scope", "$controller", "$route", function ($scope, $controller, $route) {
      var current = $route.current, locals = current.locals;
      current.controller = that.getOriginal().controller;
      if (current.controller) {
        locals.$scope = $scope;
        $controller(current.controller, locals);
      }
    }];
  })(obj);

  return obj;

};

Route.addToRoutesList = function (key, obj) {
  Route.routesList[key] = obj;
};

Route.getFromRoutesList = function (key) {
  return Route.routesList[key] || null;
};
