/* angular.module("app name", [])
    .controller("controller name", function ($scope) {}
*/

(function () {
    'use strict';
   
    angular.module('NameCalculator',[])

    .controller('NameCalculatorController', function ($scope){
        $scope.name = "";
        $scope.totalValue = 0;
        $scope.displayNumeric = function () {
            $scope.totalValue = caclulateNumericForString($scope.name);
        }
        function caclulateNumericForString(string)
        {
            var totalStringValue = 0;
            for (var i =0; i <string.length; i++) {
                totalStringValue += string.charCodeAt(i);
            }
             return totalStringValue;
        }
    });
})();