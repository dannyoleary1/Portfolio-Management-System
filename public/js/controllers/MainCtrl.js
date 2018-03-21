angular.module('MainCtrl', []).controller('MainController', function($scope,$q, JSONModel, REST, MainUtil) {
    // var test = JSONModel.get()
    // test.stocks.forEach(function (value) {
    //     REST.create('/api/stocks', value)
    // })



    $q.all([
        REST.get('/api/stocks'),
        REST.get('https://scraper601.herokuapp.com/scrape/test?n=1')
    ]).then(function(data) {
        $scope.allStocks = data[0];
        $scope.testInfo = data[1];
        $scope.allStocks.forEach(function (entry) {
            MainUtil.setUpData(entry, $scope.testInfo)
        })
    });


     // REST.get('/api/stocks').then(function(data){
     //     $scope.allStocks = data;
     // }).then(function (){
     //     REST.get('https://scraper601.herokuapp.com/scrape/test?n=1').then(function (data) {
     //         $scope.testInfo = data;
     //     })
     // }).then(function () {
     //     $scope.allStocks.forEach(function (entry) {
     //         MainUtil.setUpData(entry, $scope.testInfo)
     //     })
     // })







});