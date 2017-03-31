angular.
module("myUl").
component('createList',{
    templateUrl: './toDo/createList.component.html',
    controller: createList,
    bindings: {
        wishes: '=',
        currentPage: '=',
        status: '=',
        pages: '=',
        wishLists: '='
    }
});//end component

function createList() {
    var ctrl = this;
    ctrl.listLabel = "";
    ctrl.createList = function () {
        console.log(ctrl.listLabel);
        ctrl.wishLists.push({
            name: ctrl.listLabel,
            wishes: []
        })
    }

}//end CTRLfunction