'use strict';

var module = angular.module('listView');

module.controller('cityBoxController', [function() {
  var self = this;


  self.$onInit = function(){
    self.cityName = self.city.city_name;
    var hashCode = self.city.picture_hashcode;
    if(hashCode && hashCode.length){
    self.imageUrl = "https://imgs-akamai.mnstatic.com/" + hashCode[0] + hashCode[1] + "/" + hashCode[2] + hashCode[3] + "/" + hashCode + ".jpg?output-quality=75&output-format=progressive-jpeg&interpolation=lanczos-none&fit=around%7C183%3A90&crop=183%3A90%3B*%2C*";
    }

  }
}]);
