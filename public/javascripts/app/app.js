var app = angular.module('ausmug.app', [
    'ngRoute'
  ])
  .config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'javascripts/app/home/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'ctrl'
      });
  });
