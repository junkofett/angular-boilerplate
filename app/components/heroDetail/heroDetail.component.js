(function(){
    "use strict";

    angular.module('app').component('heroDetail', {
        templateUrl: './app/components/heroDetail/heroDetail.html',
        controller: 'HeroDetailController',
        bindings: {
            hero: '<',
            onDelete: '&',
            onUpdate: '&'
        }
    });
})();