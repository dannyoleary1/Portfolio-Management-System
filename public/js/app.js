// public/js/app.js
var app = angular.module('app', ['ngRoute', 'appRoutes', 'MainCtrl', 'TransactionCtrl', 'JSONModelService', 'RESTService'
    , 'MainUtilService', 'SellingUtilService', 'angularUtils.directives.dirPagination']);