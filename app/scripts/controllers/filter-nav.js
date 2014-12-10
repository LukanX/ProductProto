'use strict';

/**
 * @ngdoc function
 * @name productsProtoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the productsProtoApp
 */
angular.module('productsProtoApp')
  .controller('FilterNavCtrl', function ($scope) {
    $scope.showGender = false;
    $scope.genderFilter = '';
  });