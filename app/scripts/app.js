'use strict';

/**
 * @ngdoc overview
 * @name xmlEesApp
 * @description
 * # xmlEesApp
 *
 * Main module of the application.
 */
angular
  .module('Menu', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../Menu.html',
        controller: 'MenuCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
