'use strict';

function DemoController($scope, $rootScope) {

  //$interval(function () {
  //  if ($rootScope.title.length > 25) {
  //    $rootScope.title = '';
  //  }
  //  $rootScope.title += ".";
  //}, 300);

  $rootScope.title = "Hello, World!";
  $scope.demoText = "Hello, World!";

}

// register controller
DemoController.$inject = ['$scope', '$rootScope'];
app.controller("DemoController", DemoController);
