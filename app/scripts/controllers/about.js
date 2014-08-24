'use strict';

/**
 * @ngdoc function
 * @name payusaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the payusaApp
 */
angular.module('payusaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.spends = [
        {'category': 'Pensions', 'percent': 0.250101},
        {'category': 'Healthcare', 'percent': 0.247815},
        {'category': 'Education', 'percent': 0.024692},
        {'category': 'Defense', 'percent': 0.236988},
        {'category': 'Welfare', 'percent': 0.117177},
        {'category': 'Protection', 'percent': 0.015226},
        {'category': 'Transportation', 'percent': 0.026544},
        {'category': 'General Government', 'percent': 0.008800},
        {'category': 'Unclassified', 'percent': 0.008713},
        {'category': 'Interest Payments', 'percent': 0.063944}
    ];
    $scope.predicate = '-percent';  
    $scope.visible = false;
    $scope.averagetax = 10000;
  });
