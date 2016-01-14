'use strict';

/**
 * @ngdoc function
 * @name xmlEesApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the xmlEesApp
 */
angular.module('xmlEesApp')
  .controller('SearchCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.data = {
    	type:null,
    	tutelle:null,
    	statut:null,
    	academie:null,
    	universite:null
   };

   $scope.index = 0;
   $scope.numberLimite = 30;
   $scope.etabToDisplay = new Array($scope.numberLimite);
   $scope.filters = {};


    $http.post("http://localhost:3000/getTypes").success(function(data) {
          $scope.types = data["types"];
        });

    $http.post("http://localhost:3000/getTutelles").success(function(data) {
          $scope.tutelles = data["types"];
        });

    $http.post("http://localhost:3000/getStatuts").success(function(data) {
          $scope.statuts = data["types"];
        });


    $http.post("http://localhost:3000/getAcademies").success(function(data) {
          $scope.academies = data["types"];
        });

    $http.post("http://localhost:3000/getUniversites").success(function(data) {
          $scope.universites = data["types"];
        });

    $http.post("http://localhost:3000/getEtabForStat").success(function(data) {
          $scope.etabs = data["etablissements"];
        });
    

    $scope.openLink = function(link) {
      alert("coucou");
      $window.open(link);
    };

  }]);