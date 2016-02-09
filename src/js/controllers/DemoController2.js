'use strict';

function DemoController2($scope, $rootScope) {

  //$interval(function () {
  //  if ($rootScope.title.length > 25) {
  //    $rootScope.title = '';
  //  }
  //  $rootScope.title += ".";
  //}, 300);
  alert(2);
  $rootScope.title = "Hello, World!";
  $scope.demoText = "Hello, World!";

}

// register controller
DemoController2.$inject = ['$scope', '$rootScope'];
app.controller("DemoController2", DemoController2);
