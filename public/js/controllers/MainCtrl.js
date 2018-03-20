angular.module('MainCtrl', []).controller('MainController', function($scope, JSONModel, REST) {

    $scope.tagline = 'To the moon and back!';
    // var test = JSONModel.get()
    // test.stocks.forEach(function (value) {
    //     REST.create('/api/stocks', value)
    // })


     REST.get('/api/stocks').then(function(data){
         $scope.allStocks = data;
     });
});