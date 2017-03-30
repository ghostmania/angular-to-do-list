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
        $scope.showOnCurrentPage = function (index) { // show element when needed
            return (($scope.currentPage*3 - 3) <= index && index < ($scope.currentPage*3))
        };
        $scope.goToPage = function (page) { // change page function
            if (page >= 1 && page <= $scope.pages.length) {
                $scope.currentPage = page;
            }
        };
        $scope.removeLi = function (index, liToDelete) { // removeLi function
            var neededLi = $scope.wishes.find(function (wish) { // find li in wishes
                return wish.value == liToDelete.value
            });
            $scope.wishes.splice($scope.wishes.indexOf(neededLi), 1); // remove li form wishes
            var liToShow = $filter('filter')($scope.wishes, { checked: $scope.status });
            if (Math.ceil(liToShow.length / 3) < $scope.pages.length && $scope.pages.length > 1){
                $scope.pages.splice($scope.pages.length - 1, 1);
                if ($scope.currentPage > $scope.pages.length) { // if removed last page, redirected to previous
                    $scope.currentPage = $scope.pages.length;
                }
            }
        };
        $scope.showWishes = function (f) {
            $scope.currentPage = 1;
            $scope.status = f;
            $scope.pages = [1];
            var liToShow = $filter('filter')($scope.wishes, { checked: $scope.status });
            console.log(liToShow);
            console.log($scope.wishes);
            for (var i=2; i <= (Math.ceil(liToShow.length / 3)); i++) { // recreate pages
                $scope.pages.push(i)
            }
        };
        $scope.checkUncheck = function (index) {
            var liToShow = $filter('filter')($scope.wishes, { checked: $scope.status }); // filter lis
            if ($scope.status !== '') { // check if not on All tab
                liToShow.splice(index, 1); // hide li from view
                if (Math.ceil(liToShow.length / 3) < $scope.pages.length && $scope.pages.length > 1) { // recount pages
                    $scope.pages.splice($scope.pages.length - 1, 1);
                    if ($scope.currentPage > $scope.pages.length) { // if removed last page, redirected to previous
                        $scope.currentPage = $scope.pages.length;
                    }
                }
            }
        }
    }//end controller
]);