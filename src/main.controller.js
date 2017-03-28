angular.
    module("myUl",[]). // set module
    controller('MainController', ['$scope', function ($scope) {
        $scope.input = ""; // set empty value to input
        $scope.wishes = [];
        $scope.pages = [1];
        $scope.filteredWishes = [];
        $scope.currentPage = 1;
        $scope.currentTab = 'all';
        $scope.addItem = function () { // Add input value to lis
            if ($scope.input.length){ // check for empty input value
                $scope.wishes.push({
                    value: $scope.input,
                    checked: false
                });
                if ($scope.currentTab !== 'completed') {
                    $scope.filteredWishes.push({
                        value: $scope.input,
                        checked: false
                    });
                }
                if (Math.ceil($scope.filteredWishes.length / 3) > $scope.pages.length) { // create pages when needed
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
            $scope.wishes.splice(index, 1);
            $scope.filteredWishes.splice(index, 1);
            if (Math.ceil($scope.filteredWishes.length / 3) < $scope.pages.length && $scope.pages.length > 1){
                $scope.pages.splice($scope.pages.length - 1, 1);
                if ($scope.currentPage > $scope.pages.length) { // if removed last page, redirected to previous
                    $scope.currentPage = $scope.pages.length;
                }
            }
        };
        $scope.showWishes = function (f) {
            $scope.currentPage = 1;
            if (f == 'all'){
                $scope.currentTab = f;
                $scope.filteredWishes = angular.copy($scope.wishes);
            } else {
                f ? $scope.currentTab = 'completed': $scope.currentTab = 'active';
                $scope.filteredWishes = $scope.wishes.filter(function (li) {
                    return li.checked == f
                });
            }
            $scope.pages = [1];
            for (var i=2; i <= (Math.ceil($scope.filteredWishes.length / 3)); i++) { // create pages
                $scope.pages.push(i)
            }
        };
        $scope.checkUncheck = function (index, li) {
            var xx = $scope.wishes.find(function (wish) {
                return wish.value == li.value
            });
            console.log(xx);
            xx.checked = li.checked;
            console.log(xx);
            if ($scope.currentTab !== 'all') {
                $scope.filteredWishes.splice(index, 1);
                if (Math.ceil($scope.filteredWishes.length / 3) < $scope.pages.length && $scope.pages.length > 1) {
                    $scope.pages.splice($scope.pages.length - 1, 1);
                    if ($scope.currentPage > $scope.pages.length) { // if removed last page, redirected to previous
                        $scope.currentPage = $scope.pages.length;
                    }
                }
            }
        }
    }//end controller
]);