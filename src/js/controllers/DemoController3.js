'use strict';

function DemoController3($scope, $rootScope) {

  //$interval(function () {
  //  if ($rootScope.title.length > 25) {
  //    $rootScope.title = '';
  //  }
  //  $rootScope.title += ".";
  //}, 300);
  alert(3);
  $rootScope.title = "Hello, World!";
  $scope.demoText = "Hello, World!";
  $scope.xz = function() {
    $scope.demoText = "zźźźźźźź";
  }

}

// register controller
DemoController3.$inject = ['$scope', '$rootScope'];
app.controller("DemoController3", DemoController3);
