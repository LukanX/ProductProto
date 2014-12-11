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
    $scope.showScreenSize = false;
    $scope.screenSizeFilter = '';
    $scope.showColor = false;
    $scope.colorFilter = '';
    $scope.showCameraType = false;
    $scope.cameraTypeFilter = '';
    $scope.showPanType = false;
    $scope.panTypeFilter = '';
  });