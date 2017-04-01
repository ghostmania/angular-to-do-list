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
        if (ctrl.listLabel.length) { // if input not empty
            ctrl.wishLists.push({
                name: ctrl.listLabel,
                wishes: []
            });
            ctrl.listLabel = "";
        }
        document.getElementById('listInput').focus();
    };
    ctrl.createListOnEnter = function (e) {
        if (e.keyCode == 13) {
            ctrl.createList()
        }
    };

}//end CTRLfunction