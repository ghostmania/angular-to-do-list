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
    ctrl.createList = function () { // create list START
        if (ctrl.listLabel.length) { // if input not empty
            ctrl.wishLists.push({
                name: ctrl.listLabel,
                wishes: []
            });
            ctrl.pages.push({
                pagesForWishList: 1 // create first page in wish list
            });

            ctrl.listLabel = "";
        }
        document.getElementById('listInput').focus();
    }; // create list END
    ctrl.createListOnEnter = function (e) {
        if (e.keyCode == 13) {
            ctrl.createList()
        }
    };

}//end CTRLfunction