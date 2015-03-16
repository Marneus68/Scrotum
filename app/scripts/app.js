'use strict';

/**
 * @ngdoc overview
 * @name scrotumApp
 * @description
 * # scrotumApp
 *
 * Main module of the application.
 */
angular
    .module('scrotumApp', [
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize'
    ])
    .config(function ($routeProvider) {
        $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});

