'use strict';

var module = angular.module('listView', ['ngRoute']);

module.config(function($routeProvider) {
  $routeProvider.when('/cities', {
    template: '<list-view></list-view>'
  });
});
