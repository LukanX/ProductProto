'use strict';

/**
 * @ngdoc function
 * @name productsProtoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the productsProtoApp
 */
angular.module('productsProtoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
