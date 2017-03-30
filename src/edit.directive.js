angular.
    module("myUl").
    directive('edit', function () {
    return {
        restrict: 'A',
        scope: {
            wish : '='
        },
        link: function (scope, element) {
            function editLi () {
                function edit() {
                    scope.wish.value = input.val();
                    scope.$apply();
                    input.remove();
                    element.parent().children().css("display", "")
                }
                var input = angular.element("<input onfocus='this.value = this.value' id='inputID' value='"+element.text()+"'/>");
                input.on("keypress", function(e) { // edit function on input
                    if (e.keyCode == 13) {
                        edit()
                    }
                });
                input.on("blur", function() { // edit function on blur
                    edit()
                });
                element.parent().children().css("display", "none");// hide elements in li
                element.parent().append(input);
                document.getElementById("inputID").focus(); // focus on input
            }
            element.on('dblclick', editLi);
        }
    }
});