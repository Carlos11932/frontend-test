'use strict';

angular.module('myApp', ['ngRoute', 'listView', 'mapView'])
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/cities'});
  }]);
