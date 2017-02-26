(function(){
    "use strict";

    angular.module('app')
        .controller('HeroDetailController', HeroDetailController);
    
    function HeroDetailController() {
        var ctrl = this;
        ctrl.delete = deleteHero;
        ctrl.update = updateHero;
        
        function deleteHero(){
            ctrl.onDelete({ hero: ctrl.hero });
        };

        function updateHero(prop, value) {
            ctrl.onUpdate({ hero: ctrl.hero, prop: prop, value: value });
        };
    }
})();