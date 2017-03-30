angular.
    module("myUl",[]). // set module
    controller('MainController', ['$scope', '$filter', function ($scope, $filter) {
        $scope.input = ""; // set empty value to input
        $scope.wishes = [];
        $scope.pages = [1];
        $scope.currentPage = 1;
        $scope.status = "";
        $scope.addItem = function () { // Add input value to lis
            if ($scope.input.length){ // check for empty input value
                $scope.wishes.push({
                    value: $scope.input,
                    checked: false
                });
                var liToShow = $filter('filter')($scope.wishes, { checked: $scope.status });
                if (Math.ceil(liToShow.length / 3) > $scope.pages.length) { // create pages when needed
                    $scope.pages.push($scope.pages.length + 1)
                }
                $scope.input = ""; // Clear input after push
            }
            document.getElementById('wishInput').focus();
        };
        $scope.addOnEnter = function (e) {
            if (e.keyCode == 13) {
                $scope.addItem()
            }
        };

        $scope.goToPage = function (page) { // change page function
            if (page >= 1 && page <= $scope.pages.length) {
                $scope.currentPage = page;
            }
        };

    }//end controller
]);