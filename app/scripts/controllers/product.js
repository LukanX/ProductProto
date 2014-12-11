'use strict';

/**
 * @ngdoc function
 * @name 1104MessagingProtoApp.controller:MainCtrl
 * @description
 * # Merchant List Control
 * Controller of the MessagingApp
 */

angular.module('productsProtoApp')
  .controller('productCtrl', ['$scope','Product', '$timeout', '$routeParams',
   function ($scope, Product, $timeout, $routeParams) {
    $scope.searchId = $routeParams.productId;
    $scope.deals = Product.query();
    $scope.typeFilter = '';
    $scope.favorited = false;
    $scope.saleAlerted = false;
    $scope.alreadyFavorited = false;
    $scope.viewLimit = 8;
    $scope.brandChecked = false;
    $scope.showPopup = false;


    $scope.showFavoriteMessage = function(){
    	$scope.showMessageVisible = true;
    	$timeout(function(){
    		$scope.showMessageVisible = false;
    		$scope.alreadyFavorited = true;
    	}, 5000);
    };

    $scope.popupCounter = $timeout(function(){
      $scope.showPopup = true;
    }, 16000);
  }]);