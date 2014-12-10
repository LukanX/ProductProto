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
    .when('/index', {
        templateUrl: 'views/homepage.html',
        controller: 'productCtrl'
      })
      .when('/test', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/search-category', {
        templateUrl: 'views/search-category.html',
        controller: 'productCtrl'
      })
      .when('/research-category', {
        templateUrl: 'views/research-category.html',
        controller: 'productCtrl'
      })
      .when('/products/:productId', {
        templateUrl: 'views/product.html',
        controller: 'productCtrl'
      })
      .when('/compare', {
        templateUrl: 'views/compare.html',
        controller: 'productCtrl'
      })
      .when('/collection', {
        templateUrl: 'views/collection.html',
        controller: 'productCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
