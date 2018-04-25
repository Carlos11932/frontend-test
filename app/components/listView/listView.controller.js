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


  self.$onInit = function(){
    self.cities = [];
    getData();
  }
}]);
