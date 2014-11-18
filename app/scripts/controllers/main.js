'use strict';

/**
 * @ngdoc function
 * @name productsProtoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the productsProtoApp
 */
angular.module('productsProtoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
