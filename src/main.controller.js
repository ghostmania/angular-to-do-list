angular.
    module("myUl",[]). // set module
    controller('MainController', ['$scope', function ($scope) {
        $scope.input = ""; // set empty value to input
        $scope.lis = [];
        $scope.addItem = function () { // Add input value to lis
            if ($scope.input.length){ // check for empty input value
                $scope.lis.push({
                    value: $scope.input
                });
                $scope.input = ""; // Clear input after push
                }
            };
        $scope.pages = [
            page = 1
        ];
    }//end controller
]);