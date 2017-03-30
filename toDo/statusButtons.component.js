angular.
    module("myUl").
    component("statusButtons",{
        templateUrl: './toDo/statusButtons.component.html',
        controller: statusButtonCTRL,
        bindings: {
            wishes: '=',
            currentPage: '=',
            status: '=',
            pages: '='
        }
});//end component

function statusButtonCTRL($filter) {
    var ctrl = this;
    ctrl.showWishes = function (f) {
        ctrl.currentPage = 1;
        ctrl.status = f;
        ctrl.pages = [1];
        var liToShow = $filter('filter')(ctrl.wishes, { checked: ctrl.status });
        for (var i=2; i <= (Math.ceil(liToShow.length / 3)); i++) { // recreate pages
            ctrl.pages.push(i)
        }
    };
} //end status button