// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

    // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .when('/transaction', {
            templateUrl: 'views/transaction.html',
            controller: 'TransactionController'
    });


    $locationProvider.html5Mode(true);

}]);