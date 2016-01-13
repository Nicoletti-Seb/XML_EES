'use strict';

/**
 * @ngdoc function
 * @name xmlEesApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the xmlEesApp
 */
angular.module('xmlEesApp')
  .controller('SearchCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    

  }]);