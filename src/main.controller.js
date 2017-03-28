angular.
    module("myUl",[]). // set module
    controller('MainController', ['$scope', function ($scope) {
        $scope.input = ""; // set empty value to input
        $scope.lis = [];
        $scope.pages = [1];
        $scope.currentPage = 1;
        $scope.addItem = function () { // Add input value to lis
            if ($scope.input.length){ // check for empty input value
                $scope.lis.push({
                    value: $scope.input,
                    checked: false
                });
                if (Math.ceil($scope.lis.length / 3) > $scope.pages.length){ // create pages when needed
                    $scope.pages.push($scope.pages.length + 1)
                }
                $scope.input = ""; // Clear input after push
            }
        };
        $scope.addOnEnter = function (e) {
            if (e.keyCode == 13) {
                $scope.addItem()
            }
        };
        $scope.showOnCurrentPage = function (index) { // show element when needed
            return (($scope.currentPage*3 - 3) <= index && index < ($scope.currentPage*3))
        };
        $scope.goToPage = function (page) { // change page function
            if (page >= 1 && page <= $scope.pages.length) {
                $scope.currentPage = page;
            }
        };
        $scope.removeLi = function (index) { // removeLi function
            $scope.lis.splice(index, 1);
            if (Math.ceil($scope.lis.length / 3) < $scope.pages.length && $scope.pages.length > 1) {
                $scope.pages.splice($scope.pages.length - 1, 1);
                if ($scope.currentPage > $scope.pages.length) { // if removed last page, redirected to previous
                    $scope.currentPage = $scope.pages.length;
                }
            }
        }
        $scope.changeStatus = function () {
            console.log($scope.lis);
        }
    }//end controller
]);