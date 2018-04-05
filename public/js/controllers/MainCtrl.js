angular.module('MainCtrl', []).controller('MainController', function($scope,$q, JSONModel, REST, MainUtil) {
     // var test = JSONModel.get()
     // test.stocks.forEach(function (value) {
     //     REST.create('/api/stocks', value)
     // })


    $scope.testCase = [0,1,2,3,4,5];

    $scope.currentCase = 1;

    $q.all([
        REST.get('/api/stocks'),
        REST.get('https://scraper601.herokuapp.com/scrape/test?n='+$scope.currentCase)
    ]).then(function(data) {

        console.log($scope.currentCase);

        $scope.allStocks = data[0];
        $scope.testInfo = data[1];
        $scope.allStocks.sort(function(a,b){
               var desA = a.description.toLowerCase()
               var desB = b.description.toLowerCase()
            if (desA < desB) //sort string ascending
                return -1
            if (desA > desB)
                return 1
            return 0 //default return value (no sorting)
            }
        );
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


    $q.all([
        REST.get('/api/stocks'),
        REST.get('https://scraper601.herokuapp.com/scrape/test?n='+$scope.currentCase)
    ]).then(function(data) {

        console.log($scope.currentCase);

        $scope.allStocks = data[0];
        $scope.testInfo = data[1];
        $scope.allStocks.sort(function(a,b){
                var desA = a.description.toLowerCase()
                var desB = b.description.toLowerCase()
                if (desA < desB) //sort string ascending
                    return -1
                if (desA > desB)
                    return 1
                return 0 //default return value (no sorting)
            }
        );
        $scope.allStocks.forEach(function (entry) {
            MainUtil.setUpData(entry, $scope.testInfo)
        })
    });

    $scope.updateTableData = function () {
        $q.all([
            REST.get('/api/stocks'),
            REST.get('https://scraper601.herokuapp.com/scrape/test?n='+$scope.currentCase)
        ]).then(function(data) {

            console.log($scope.currentCase);

            $scope.allStocks = data[0];
            $scope.testInfo = data[1];
            $scope.allStocks.sort(function(a,b){
                    var desA = a.description.toLowerCase()
                    var desB = b.description.toLowerCase()
                    if (desA < desB) //sort string ascending
                        return -1
                    if (desA > desB)
                        return 1
                    return 0 //default return value (no sorting)
                }
            );
            $scope.allStocks.forEach(function (entry) {
                MainUtil.setUpData(entry, $scope.testInfo)
            })
        });
    }




});