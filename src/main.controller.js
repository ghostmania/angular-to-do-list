angular.
    module("myUl",[]). // set module
    controller('MainController', ['$scope', function ($scope) {
        $scope.input = ""; // set empty value to input
        $scope.lis = [];
        $scope.addItem = function () { // Add a Item to the list
            $scope.lis.push({
                value: $scope.input
            });
            $scope.input = ""; // Clear input fields after push
        };
    }
]);