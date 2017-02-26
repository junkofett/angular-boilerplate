(function(){
    "use strict";

    angular.module('app')
        .controller('HeroListController', HeroListController);
    
    HeroListController.$inject = ['$scope', '$element', '$attrs'];

    function HeroListController($scope, $element, $attrs) {
        var ctrl = this;

        // This would be loaded by $http etc.
        ctrl.list = [
            {
                name: 'Superman',
                location: ''
            },
            {
                name: 'Batman',
                location: 'Wayne Manor'
            }
        ];

        ctrl.updateHero = updateHero;
        ctrl.deleteHero = deleteHero;
        
        function updateHero(hero, prop, value) {
            hero[prop] = value;
        };
        
        function deleteHero(hero) {
            var idx = ctrl.list.indexOf(hero);
            if (idx >= 0) {
                ctrl.list.splice(idx, 1);
            }
        };
    }
})();