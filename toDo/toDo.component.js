angular.
    module("myUl").
    component('toDo',{
        templateUrl: './toDo/toDo.component.html',
        controller: toDoCTRL,
        bindings: {
            wishes: '=',
            currentPage: '=',
            status: '=',
            pages: '='
        }
});//end component

function toDoCTRL($filter) {
    var ctrl = this;
    ctrl.showOnCurrentPage = function (index) { // show element when needed
        return ((ctrl.currentPage*3 - 3) <= index && index < (ctrl.currentPage*3))
    };
    ctrl.checkUncheck = function (index) {
        var liToShow = $filter('filter')(ctrl.wishes, { checked: ctrl.status }); // filter lis
        if (ctrl.status !== '') { // check if not on All tab
            liToShow.splice(index, 1); // hide li from view
            if (Math.ceil(liToShow.length / 3) < ctrl.pages.length && ctrl.pages.length > 1) { // recount pages
                ctrl.pages.splice(ctrl.pages.length - 1, 1);
                if (ctrl.currentPage > ctrl.pages.length) { // if removed last page, redirected to previous
                    ctrl.currentPage = ctrl.pages.length;
                }
            }
        }
    };
    ctrl.removeLi = function (index, liToDelete) { // removeLi function
        var neededLi = ctrl.wishes.find(function (wish) { // find li in wishes
            return wish.value == liToDelete.value
        });
        ctrl.wishes.splice(ctrl.wishes.indexOf(neededLi), 1); // remove li form wishes
        var liToShow = $filter('filter')(ctrl.wishes, { checked: ctrl.status });
        if (Math.ceil(liToShow.length / 3) < ctrl.pages.length && ctrl.pages.length > 1){
            ctrl.pages.splice(ctrl.pages.length - 1, 1);
            if (ctrl.currentPage > ctrl.pages.length) { // if removed last page, redirected to previous
                ctrl.currentPage = ctrl.pages.length;
            }
        }
    };

}//end CTRLfunction