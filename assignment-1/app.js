(function () {
'use strict';

angular
.module    ('Assignment1App', [])
.controller('Assignment1Controller', Assignment1Controller);

Assignment1Controller.$inject = ["$scope"];
function Assignment1Controller($scope) {
  $scope.itemsList = "";
  $scope.checkResult = "";

  $scope.checkIfTooMuch = function () {
    if ($scope.itemsList == "") {
      $scope.checkResult = "";
    } else {
      var numberOfItems = $scope.itemsList.split(',').length;
      $scope.checkResult = (numberOfItems < 4) ? "Enjoy!" : "Too much!";
    }
  }

}

})();
