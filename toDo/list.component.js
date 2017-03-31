angular.
module("myUl").
component("listComponent",{
    templateUrl: './toDo/list.component.html',
    controller: createListCTRL,
    bindings: {
        wishes: '=',
        status: '=',
        pages: '=',
        input: '=',
        wishLists: '='

    }
});//end component

function createListCTRL($filter) {
    var ctrl = this;
    ctrl.addItem = function () { // Add input value to lis
        if (ctrl.input.length){ // check for empty input value
            ctrl.wishes.push({
                value: ctrl.input,
                checked: false
            });
            var liToShow = $filter('filter')(ctrl.wishes, { checked: ctrl.status });
            if (Math.ceil(liToShow.length / 3) > ctrl.pages.length) { // create pages when needed
                ctrl.pages.push(ctrl.pages.length + 1)
            }
            ctrl.input = ""; // Clear input after push
        }
        document.getElementById('wishInput').focus();
    };
    ctrl.addOnEnter = function (e) {
        if (e.keyCode == 13) {
            ctrl.addItem()
        }
    };
} //end status button