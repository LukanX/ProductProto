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
      .when('/compare/laptopBags', {
        templateUrl: 'views/compare-laptopBags.html',
        controller: 'productCtrl'
      })
      .when('/compare/vacuums', {
        templateUrl: 'views/compare-vacuums.html',
        controller: 'productCtrl'
      })
      .when('/compare/fryingPans', {
        templateUrl: 'views/compare-fryingPans.html',
        controller: 'productCtrl'
      })
      .when('/collection', {
        templateUrl: 'views/collection.html',
        controller: 'productCtrl'
      })
      .when('/store', {
        templateUrl: 'views/store.html',
        controller: 'productCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'productCtrl'
      })
      .when('/category/tablets', {
        templateUrl: 'views/tablets.html',
        controller: 'productCtrl'
      })
      .when('/category/laptopBags', {
        templateUrl: 'views/laptopBags.html',
        controller: 'productCtrl'
      })
      .when('/category/cameras', {
        templateUrl: 'views/cameras.html',
        controller: 'productCtrl'
      })
      .when('/category/vacuums', {
        templateUrl: 'views/vacuums.html',
        controller: 'productCtrl'
      })
      .when('/category/fryingPans', {
        templateUrl: 'views/frypans.html',
        controller: 'productCtrl'
      })
      .when('/collection/sweaters', {
        templateUrl: 'views/sweaters.html',
        controller: 'productCtrl'
      })
      .when('/collection/toys', {
        templateUrl: 'views/toys.html',
        controller: 'productCtrl'
      })
      .when('/collection/jackets', {
        templateUrl: 'views/jackets.html',
        controller: 'productCtrl'
      })
      .when('/collection/frozen', {
        templateUrl: 'views/frozen.html',
        controller: 'productCtrl'
      })
      .when('/collection/ornaments', {
        templateUrl: 'views/ornaments.html',
        controller: 'productCtrl'
      })
      .when('/collection/fitness', {
        templateUrl: 'views/fitness.html',
        controller: 'productCtrl'
      })
      .when('/dealoftheday', {
        templateUrl: 'views/dealoftheday.html',
        controller: 'productCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
