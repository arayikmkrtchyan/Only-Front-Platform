'use strict';

app.controller("DemoController", ['$scope', '$rootScope', '$interval', DemoController]);

function DemoController($scope, $rootScope, $interval) {

  //$interval(function () {
  //  if ($rootScope.title.length > 25) {
  //    $rootScope.title = '';
  //  }
  //  $rootScope.title += ".";
  //}, 300);

  $rootScope.title = "Hello, World!";
  $scope.demoText = "Hello, World!";

}
