'use strict';

var module = angular.module('mapView', ['ngRoute']);

module.config(function($routeProvider) {
  $routeProvider.when('/map', {
    template: '<map-view></map-view>'
  });
});
