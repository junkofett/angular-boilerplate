(function () {
    'use strict';

    angular.module('app')
        .config(homeRoute);

    homeRoute.$inject = ['$urlRouterProvider', '$stateProvider'];

    function homeRoute($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                component: 'home'
            });
    }
})();