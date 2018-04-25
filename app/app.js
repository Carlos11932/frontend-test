'use strict';

angular.module('myApp', ['ngRoute', 'listView', 'mapView', 'angular.less', 'bottomDropdown'])
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/cities'});
  }]);
