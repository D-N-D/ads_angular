'use strict';

var app = angular.module('adsApp', ['ngRoute', 'ngResource', 'LocalStorageModule', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/')

app.config(['$routeProvider','localStorageServiceProvider', function ($routeProvider, localStorageServiceProvider) {
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
    });

    //// Storage settings
    //localStorageServiceProvider.setStorageType('localStorage');
    //localStorageServiceProvider.setPrefix('myAdsApp');


}]);