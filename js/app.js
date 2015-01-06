'use strict';

var app = angular.module('adsApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
    }).when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterCtrl'
    }).when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    }).otherwise({
        redirectTo: '/'
    })
}]);