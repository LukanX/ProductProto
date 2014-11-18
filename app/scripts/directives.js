'use strict';

angular.module('productsProtoApp')
  .directive('siteHeader', function () {
    return{
    	restrict: 'E',
    	templateUrl: 'templates/site-header.html'
    };
  });