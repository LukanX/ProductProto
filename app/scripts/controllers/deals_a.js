'use strict';

/**
 * @ngdoc function
 * @name 1104MessagingProtoApp.controller:MainCtrl
 * @description
 * # Merchant List Control
 * Controller of the MessagingApp
 */

angular.module('productsProtoApp')
  .controller('dealsACtrl', ['$scope','DealsA',
   function ($scope, DealsA) {
    $scope.deals = DealsA.query();
    $scope.typeFilter = '';
  }]);