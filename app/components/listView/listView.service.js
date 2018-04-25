'use strict';

var module = angular.module('listView');

module.factory('listViewService', ['$http', '$q', function($http, $q) {

  var getCities = function(){
    var url = 'https://gist.githubusercontent.com/inakivb/943ed6b3a8bcc667c1e1147b7591e32f/raw/355b2d67aaea30fd322c7d1e1a8660480609d67a/stations.json';
    var deferred = $q.defer()
    $http.get(url)
    .then(function(response){
      deferred.resolve(response.data);
    })
    .catch(function(error){
      deferred.reject(error);
    })
    return deferred.promise;
  }

  return {
    getCities: getCities
  };
}]);
