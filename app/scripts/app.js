'use strict';

/**
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
  .module('xmlEesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]).controller('MainCtrl',function( $scope, $http, $location ){

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.changeView = function(path){
      $location.path(path);
    }

  }).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/map.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/statistics', {
        templateUrl: 'views/statistics.html',
        controller: 'StatisticsCtrl',
        controllerAs: 'statistics'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).directive('myMap',function () {
      // directive link function
      var link = function(scope, element, attrs) {
          var map, infoWindow;
          var markers = [];
          
          // map config
          var mapOptions = {
              center: new google.maps.LatLng(50, 2),
              zoom: 4,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              scrollwheel: false
          };
          
          // init the map
          function initMap() {
              if (map === void 0) {
                  map = new google.maps.Map(element[0], mapOptions);
              }
          }    
          
          // place a marker
          function setMarker(map, position, title, content) {
              var marker;
              var markerOptions = {
                  position: position,
                  map: map,
                  title: title,
                  icon: ' http://www.google.com/mapfiles/marker.png'
              };

              marker = new google.maps.Marker(markerOptions);
              markers.push(marker); // add marker to array
              
              google.maps.event.addListener(marker, 'click', function () {
                  // close window if not undefined
                  if (infoWindow !== void 0) {
                      infoWindow.close();
                  }
                  // create new window
                  var infoWindowOptions = {
                      content: content
                  };
                  infoWindow = new google.maps.InfoWindow(infoWindowOptions);
                  infoWindow.open(map, marker);
              });
          }
          
          // show the map and place some markers
          initMap();
          
          setMarker(map, new google.maps.LatLng(51.508515, -0.125487), 'London', 'Just some content');
          setMarker(map, new google.maps.LatLng(52.370216, 4.895168), 'Amsterdam', 'More content');
          setMarker(map, new google.maps.LatLng(48.856614, 2.352222), 'Paris', 'Text here');
      };
      
      return {
          restrict: 'A',
          template: '<div id="map_canvas"></div>',
          replace: true,
          link: link
      };
  });
