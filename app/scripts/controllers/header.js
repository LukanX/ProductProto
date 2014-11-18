'use strict';


angular.module('productsProtoApp')
  .controller('HeaderCtrl', function ($scope) {
    $scope.showBrowseCoupons = false;
    $scope.showIdeas = false;
    $scope.showAccount = false;
    $scope.showCountries = false;
  });