var goldilocks = angular.module('goldilocks', []);


goldilocks.config(function($routeProvider) {

    $routeProvider.
        when('/', {
            controller: 'LoginController',
            templateUrl: 'partials/login.html'
        }).
        when('/register', {
            controller: 'RegisterController',
            templateUrl: 'partials/register.html'
        }).
        when('/checkout', {
            controller: 'CheckoutController',
            templateUrl: 'views/checkout.html'
        }).
        when('/thank-you', {
            controller: 'ThankYouController',
            templateUrl: 'views/thank-you.html'
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
