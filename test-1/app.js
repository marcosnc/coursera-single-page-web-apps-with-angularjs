(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('myFirstController', function ($scope) {
  $scope.name = "Marcos";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  }
});

})();
