function Route() {
}

Route.routesList = {};
Route.role = "Guest";

Route.ng = function (template, controller, roles) {

  return {
    templateUrl: function () {
      var template = this.getOriginal().template;
      if (template) {
        template = "html/" + template;
      }
      return template;
    },
    controller: function () {
      return this.getOriginal().controller;
    },
    getOriginal: function () {
      var obj = this;
      if (this.roles.length && this.roles.indexOf(Route.role) == -1) {
        if (Route.role == "Guest") {
          obj = Route.getFromRoutesList("sign-in");
        } else {
          obj = Route.getFromRoutesList("access-denied");
        }
      }
      if (!$route.current) {
        obj = Route.getFromRoutesList("error-404");
      }
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

};

Route.addToRoutesList = function (key, obj) {
  Route.routesList[key] = obj;
};

Route.getFromRoutesList = function (key) {
  return Route.routesList[key] || null;
};
