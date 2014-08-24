'use strict';

/**
 * @ngdoc overview
 * @name payusaApp
 * @description
 * # payusaApp
 *
 * Main module of the application.
 */
angular
  .module('payusaApp', [
    'ngAnimate',
    'ngRoute',
    'fcsa-number'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/footer.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/footer.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
