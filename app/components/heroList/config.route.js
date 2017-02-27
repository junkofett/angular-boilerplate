(function () {
    'use strict';

    angular.module('app')
        .config(heroesRoute);

    heroesRoute.$inject = ['$stateProvider'];

    function heroesRoute($stateProvider) {
        $stateProvider
            .state('heroes', {
                url: '/heroes',
                component: 'heroList'
            });
    }
})();