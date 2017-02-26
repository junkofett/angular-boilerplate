(function(){
    "use strict";

    angular.module('app')
        .controller('EditableFieldController' ,EditableFieldController);

    EditableFieldController.$inject = ['$scope', '$element', '$attrs'];

    function EditableFieldController($scope, $element, $attrs) {
        var ctrl = this;
        ctrl.editMode = false;
        ctrl.handleModeChange = handleModeChange;
        ctrl.reset = reset;
        ctrl.$onInit = onInit;
        
        function handleModeChange() {
            if (ctrl.editMode) {
                ctrl.onUpdate({ value: ctrl.fieldValue });
                ctrl.fieldValueCopy = ctrl.fieldValue;
            }
            ctrl.editMode = !ctrl.editMode;
        };
        
        function reset() {
            ctrl.fieldValue = ctrl.fieldValueCopy;
        };
        
        function onInit() {
            // Make a copy of the initial value to be able to reset it later
            ctrl.fieldValueCopy = ctrl.fieldValue;

            // Set a default fieldType
            if (!ctrl.fieldType) {
                ctrl.fieldType = 'text';
            }
        };
    }
})();