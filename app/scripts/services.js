'use strict';

var productsProtoServices = angular.module('productsProtoServices', ['ngResource']);

productsProtoServices.factory('DealsA', ['$resource',
  function($resource){
    return $resource('json/deals_a.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);

productsProtoServices.factory('DealsC', ['$resource',
  function($resource){
    return $resource('json/deals_c.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);