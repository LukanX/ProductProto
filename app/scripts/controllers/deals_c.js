'use strict';

/**
 * @ngdoc function
 * @name 1104MessagingProtoApp.controller:MainCtrl
 * @description
 * # Merchant List Control
 * Controller of the MessagingApp
 */

angular.module('productsProtoApp')
  .controller('dealsCCtrl', ['$scope','DealsC',
   function ($scope, DealsC) {
    $scope.deals = DealsC.query();
    $scope.typeFilter = '';
    $scope.activeTab = 'compareStores';
  }]);