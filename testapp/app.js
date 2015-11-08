'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngAnimate', 'ngRoute', 'myApp.appVersion']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/form', {templateUrl: 'form/form.html', controller: FormCtrl});
    $routeProvider.otherwise({redirectTo: '/form'});
  }]);
