'use strict';

app.controller("RootController", ['$rootScope', RootController]);

function RootController($rootScope) {
  $rootScope.title = "";
}
