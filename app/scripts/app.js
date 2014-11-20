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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
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
      .otherwise({
        redirectTo: '/'
      });
  });
