'use strict';

/**
 * @ngdoc overview
 * @name productsProtoApp
 * @description
 * # productsProtoApp
 *
 * Main module of the application.
 */
angular
  .module('productsProtoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'productsProtoServices'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/test', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/experience', {
        templateUrl: 'views/experience-home.html',
        controller: 'MainCtrl'
      })
      .when('/experience/collection', {
        templateUrl: 'views/experience-collection.html',
        controller: 'MainCtrl'
      })
      .when('/experience/product', {
        templateUrl: 'views/experience-product.html',
        controller: 'MainCtrl'
      })
      .when('/deals', {
        templateUrl: 'views/deals-home.html',
        controller: 'dealsACtrl'
      })
      .when('/deals/category', {
        templateUrl: 'views/deals-category.html',
        controller: 'dealsACtrl'
      })
      .when('/deals/product', {
        templateUrl: 'views/deals-product.html',
        controller: 'dealsACtrl'
      })
      .when('/products-coupons/product', {
        templateUrl: 'views/product-coupons-product.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
