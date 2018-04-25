'use strict';

var module = angular.module('bottomDropdown');

module.component('bottomDropdown', {
  templateUrl: '/components/bottomDropdown/bottomDropdown.template.html',
  controller: 'bottomDropdownController',
  bindings: {
    options: "<", // ['opened': bool]
    title: "@"
  }
});
