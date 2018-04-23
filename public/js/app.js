// public/js/app.js
var app = angular.module('app', ['ngRoute', 'appRoutes', 'MainCtrl', 'JSONModelService', 'RESTService'
    , 'MainUtilService', 'angularUtils.directives.dirPagination']);