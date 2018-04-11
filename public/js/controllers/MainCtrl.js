angular.module('MainCtrl', []).controller('MainController', function($scope,$q, JSONModel, REST, MainUtil) {
     // var test = JSONModel.get()
     // test.stocks.forEach(function (value) {
     //     REST.create('/api/stocks', value)
     // })
    $scope.testCase = [0,1,2,3,4,5];
    $scope.currentCase = 0;
    $scope.description = "";
    $scope.quantity = 0;
    $scope.price = 0;

    $scope.descriptionSelectBox = {
        stock1 : "AIB",
        stock2 : "Bank Of Ireland",
        stock3 : "CRH",
        stock4 : "Ripple",
        stock5 : "Tesco"
    }

    $q.all([
        REST.get('/api/stocks'),
        REST.get('https://scraper601.herokuapp.com/scrape/test?n='+$scope.currentCase)
    ]).then(function(data) {
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
            $scope.allStocks = data[0];
            $scope.testInfo = data[1];
            $scope.allStocks.sort(function(a,b){
                    console.log(desA)
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
    
    $scope.addEntry = function () {
        var ise = ["AIB", "Bank of Ireland", "CRH"]
        var currentTime = new Date().toLocaleDateString();
        if (ise.includes($scope.description)){
            //TODO get date.
            if ($scope.description == "AIB") {
                var body = {
                    "description": "AIB",
                    "location": "ise",
                    "symbol": "AIBG_I",
                    "dateIn": currentTime,
                    "quantity": $scope.quantity,
                    "cost": $scope.price,
                    "dateOut": "",
                    "purchasePrice": 0.00,
                    "price": 0.00,
                    "value": 0.00,
                    "gainOrLost": 0.00,
                    "percentGainOrlost": 0.00,
                    "sellCosts": 0.00,
                }
            }
            else if ($scope.description == "Bank of Ireland"){
                var body = {
                    "description": "Bank of Ireland",
                    "location": "ise",
                    "symbol": "BIRG_I",
                    "dateIn": "01/01/2018",
                    "quantity": $scope.quantity,
                    "cost": $scope.price,
                    "dateOut": "",
                    "purchasePrice": 0.00,
                    "price": 0.00,
                    "value": 0.00,
                    "gainOrLost": 0.00,
                    "percentGainOrlost": 0.00,
                    "sellCosts": 0.00,
                }
            }
            else {
                var body = {
                    "description": "CRH",
                    "location": "ise",
                    "symbol": "CRH_I",
                    "dateIn": "01/01/2014",
                    "quantity": $scope.quantity,
                    "cost": $scope.price,
                    "dateOut": "",
                    "purchasePrice": 0.00,
                    "price": 0.00,
                    "value": 0.00,
                    "gainOrLost": 0.00,
                    "percentGainOrLost": 0.00,
                    "sellCosts": 0.00
                }
            }
        }
        else if ($scope.description == "Tesco"){
            var body = {
                "description": "Tesco",
                "location": "ftse",
                "symbol": "TSCO",
                "dateIn": "01/01/2014",
                "quantity": $scope.quantity,
                "cost": $scope.price,
                "dateOut": "",
                "purchasePrice": 0.00,
                "price": 0.00,
                "value": 0.00,
                "gainOrLost": 0.00,
                "percentGainOrlLst": 0.00,
                "sellCosts": 0.00
            }
        }
        else{
            var body = {
                "description": "Ripple",
                "location": "coinranking",
                "symbol": "ripple-xrp",
                "dateIn": "01/01/2016",
                "quantity": $scope.quantity,
                "cost": $scope.price,
                "dateOut": "",
                "purchasePrice": 0.00,
                "price": 0.00,
                "value": 0.00,
                "gainOrLost": 0.00,
                "percentGainOrLost": 0.00,
                "sellCosts": 0.00
            }
        }
        REST.create("api/stocks", body).then(function (data){
            $scope.updateTableData()
        })
    }

    $scope.resetData = function () {
        REST.delete("api/stocks").then(function (data){
             var test = JSONModel.get()
             test.stocks.forEach(function (value) {
                 REST.create('/api/stocks', value)
             })
        }).then(function (data){
            $scope.updateTableData()
        });
    }
});