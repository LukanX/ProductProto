'use strict';

/**
 * @ngdoc function
 * @name 1104MessagingProtoApp.controller:MainCtrl
 * @description
 * # Merchant List Control
 * Controller of the MessagingApp
 */

angular.module('productsProtoApp')
  .controller('dealsBCtrl', ['$scope','DealsB', 'CollectionsB',
   function ($scope, DealsB, CollectionsB) {
    $scope.deals = DealsB.query();
    $scope.collections = CollectionsB.query();
  }]);