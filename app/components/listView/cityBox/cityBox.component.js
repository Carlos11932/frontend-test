'use strict';

var module = angular.module('listView');

module.component('cityBox', {
  templateUrl: '/components/listView/cityBox/cityBox.template.html',
  controller: 'cityBoxController',
  bindings: {
    city: '<'
  }
});
