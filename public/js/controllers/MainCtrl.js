angular.module('MainCtrl', []).controller('MainController', function($scope, JSONModel) {

    $scope.tagline = 'To the moon and back!';
    $scope.allStocks = JSONModel.get();
});