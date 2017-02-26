(function(){
    "use strict";

    angular.module('app').component('editableField', {
        templateUrl: './app/components/editableField/editableField.html',
        controller: 'EditableFieldController',
        bindings: {
            fieldValue: '<',
            fieldType: '@?',
            onUpdate: '&'
        }
    });
})();