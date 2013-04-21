var goldilocks = angular.module('goldilocks', ['ngResource', 'ngCookies']);




goldilocks.config(function($routeProvider) {

    $routeProvider.
        when('/', {
            templateUrl: 'partials/login.html'
        }).
        when('/register', {
            controller: 'RegisterCtrl',
            templateUrl: 'partials/register.html'
        }).
        when('/home', {
            controller: 'HomeCtrl',
            templateUrl: 'partials/home.html'
        }).
        when('/details/', {
            controller: 'DetailsCtrl',
            templateUrl: 'partials/details.html'
        }).
        when('/customer', {
            controller: 'CustomerController',
            templateUrl: 'views/customer.html'
        }).
        when('/who-we-are', {
            templateUrl: 'views/who-we-are.html'
        }).
        when('/how-it-works', {
            templateUrl: 'views/how-it-works.html'
        }).
        when('/help', {
            templateUrl: 'views/help.html'
        });
});
