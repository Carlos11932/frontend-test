'use strict';

var module = angular.module('listView');

module.controller('listViewController', ['listViewService', function(listViewService) {
  var self = this;

  var getData = function(){
    listViewService.getCities()
      .then(function(cities){
        self.cities = cities;
      });
  }

  self.toggleDropDown = function(){
    self.optionsDropdown.opened = !self.optionsDropdown.opened;
  }

  self.$onInit = function(){
    self.optionsDropdown = {
      opened: false
    };
    self.cities = [];
    getData();
  }
}]);
