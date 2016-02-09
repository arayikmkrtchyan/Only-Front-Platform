'use strict';

function DemoController1($scope, $rootScope) {

  //$interval(function () {
  //  if ($rootScope.title.length > 25) {
  //    $rootScope.title = '';
  //  }
  //  $rootScope.title += ".";
  //}, 300);

  alert(1);
  $rootScope.title = "Hello, World!";
  $scope.demoText = "Hello, World!";

}

// register controller
DemoController1.$inject = ['$scope', '$rootScope'];
app.controller("DemoController1", DemoController1);
