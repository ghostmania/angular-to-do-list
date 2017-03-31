angular.
module("myUl").
component("pages",{
    templateUrl: './toDo/pages.component.html',
    controller: pagesCTRL,
    bindings: {
        currentPage: '=',
        pages: '='
    }
});//end component

function pagesCTRL() {
    var ctrl = this;
    ctrl.goToPage = function (page) { // change page function
        if (page >= 1 && page <= ctrl.pages.length) {
            ctrl.currentPage = page;
        }
    };
} //end status button