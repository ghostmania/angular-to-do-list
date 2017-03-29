angular.
    module("myUl").
    directive('edit', function () {
    return {
        restrict: 'A',
        scope: true,
        link: function (scope, element) {
            function editLi () {
                var input = angular.element("<input id='inputID' autofocus value='"+element.text()+"'/>");
                input.on("keypress", function(e) { // edit function on input
                    if (e.keyCode == 13) {
                        element.text(input.val()); // set new value for span
                        input.remove();
                        element.parent().children().css("display", "")
                    }
                });
                element.parent().children().css("display", "none");// hide elements in li
                element.parent().append(input);
            }
            element.on('dblclick', editLi);
        }
    }
});