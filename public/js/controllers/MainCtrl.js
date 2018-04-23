angular.module('MainCtrl', []).controller('MainController', function($scope,$q, JSONModel, REST, MainUtil) {
    $scope.testCase = [0,1,2,3,4,5];

    $scope.currentCase = 0;
    $scope.description = "";
    $scope.quantity = 0;
    $scope.price = 0;
    $scope.uid = 17;
    $scope.descriptionSelectBox = {
        stock1 : "AIB",
        stock2 : "Bank Of Ireland",
        stock3 : "CRH",
        stock4 : "Ripple",
        stock5 : "Tesco"
    };
    $scope.purchasePriceTotal = 0;
    $scope.totalSellPrice = 0;
    $scope.totalCurrentValue = 0;
    $scope.totalByStock = {};
    $scope.soldStockProfit = 0;

    $q.all([
        REST.get('/api/stocks'),
        REST.get('https://scraper601.herokuapp.com/scrape/test?n='+$scope.currentCase)
    ]).then(function(data) {
        $scope.allStocks = data[0];
        $scope.testInfo = data[1];
        $scope.allStocks.sort(function(a,b){
            return cmp(a.description.toLowerCase(), b.description.toLowerCase()) || cmp(a.dateIn, b.dateIn)
            }
        );
        var prevDes = "";
        var prevEntry;
        var total = 0;
        var i = 0;
        $scope.allStocks.forEach(function (entry) {
            if (entry.description==prevDes){
                total = total + entry.quantity;
                prevEntry = entry;
                if (i==$scope.allStocks.length-1){
                    prevEntry.total = total;
                }
            }
            else if (entry.description!=prevDes) {
                if (prevEntry!=undefined) {
                    if (prevEntry.description != ""){
                        $scope.totalByStock[prevEntry.description] = total
                    }
                    prevEntry.total = total;
                }
                //New Entry.

                total = 0;
                total = total + entry.quantity;
                prevDes = entry.description;
                prevEntry = entry;
            }
            MainUtil.setUpData(entry, $scope.testInfo);
            i++
            $scope.purchasePriceTotal += parseFloat(entry.cost);
            $scope.totalSellPrice += entry.sellCosts;
            $scope.totalCurrentValue += parseFloat(entry.value);
        })
        $scope.currentValueAfterSellPrice = parseFloat($scope.totalCurrentValue) - parseFloat($scope.totalSellPrice);
        $scope.netProfit = parseFloat($scope.currentValueAfterSellPrice) - parseFloat($scope.purchasePriceTotal);
    });

    $scope.updateTableData = function () {
        $q.all([
            REST.get('/api/stocks'),
            REST.get('https://scraper601.herokuapp.com/scrape/test?n='+$scope.currentCase)
        ]).then(function(data) {
            $scope.allStocks = data[0];
            $scope.testInfo = data[1];
            $scope.purchasePriceTotal = 0;
            $scope.totalSellPrice = 0;
            $scope.totalCurrentValue = 0;
            $scope.currentValueAfterSellPrice = 0;
            $scope.netProfit = 0;
            $scope.allStocks.sort(function(a,b){
                   return cmp(a.description.toLowerCase(), b.description.toLowerCase()) || cmp(a.dateIn, b.dateIn)
                }
            );
            var prevDes = "";
            var prevEntry;
            var total = 0;
            var i = 0;

            $scope.allStocks.forEach(function (entry) {
                if (entry.description==prevDes){
                    total = total + entry.quantity;
                    prevEntry = entry;
                    if (i==$scope.allStocks.length-1){
                        prevEntry.total = total;
                    }
                }
                else if (entry.description!=prevDes) {
                    if (prevEntry!=undefined) {
                        prevEntry.total = total;
                    }
                    //New Entry.
                    total = 0;
                    total = total + entry.quantity;
                    prevDes = entry.description;
                    prevEntry = entry;
                }
                MainUtil.setUpData(entry, $scope.testInfo);
                $scope.purchasePriceTotal += parseFloat(entry.cost);
                $scope.totalSellPrice += entry.sellCosts;
                $scope.totalCurrentValue += parseFloat(entry.value);
                i++;
            })
            $scope.currentValueAfterSellPrice = parseFloat($scope.totalCurrentValue) - parseFloat($scope.totalSellPrice);
            $scope.netProfit = parseFloat($scope.currentValueAfterSellPrice) - parseFloat($scope.purchasePriceTotal);
        });
    }
    
    $scope.addEntry = function () {
        $scope.uid +=1;
        var ise = ["AIB", "Bank of Ireland", "CRH"];
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
                    "_id": $scope.uid
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
                    "_id":$scope.uid
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
                    "sellCosts": 0.00,
                    "_id":$scope.uid
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
                "sellCosts": 0.00,
                "_id":$scope.uid
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
                "sellCosts": 0.00,
                "_id":$scope.uid
            }
        }
        REST.create("api/stocks", body).then(function (data){
            $scope.updateTableData()
        })
    };

    $scope.resetData = function () {
        REST.delete("api/stocks").then(function (data){
             var test = JSONModel.get();
             test.stocks.forEach(function (value) {
                 REST.create('/api/stocks', value)
             })
        }).then(function (data){
            $scope.updateTableData()
        });
    };

    cmp = function(a, b) {
        if (a > b) return +1;
        if (a < b) return -1;
        return 0;
    }

    $scope.sellStock = function () {
        var prevEntry;
        var cost = 0;
        var value =0;
        var currentQuanitity = $scope.quantity;
        var finished = false;
        //quantity * current price = the value?
        $scope.allStocks.forEach(function (entry){
            if (finished == false){
            currentPrice = entry.price;
            if(entry.description==$scope.description) {
                if ($scope.totalByStock[entry.description] < currentQuanitity) {
                    //THe user doesn't have enough stocks to sell for this particular share.
                    console.log(currentQuanitity);
                    console.log($scope.totalByStock[entry.description])
                    console.log("Not enough stocks")
                }
                else if (currentQuanitity > entry.quantity) {
                    //In the current entry, there's not enough shares but overall there is enough.
                    //Delete entry in this.
                    //THE COST OF THE ENTRY ALSO NEEDS TO BE CHANGED SOMEHOW.
                    console.log(entry)
                    cost += parseFloat(entry.cost);
                    currentQuanitity -= entry.quantity;
                    REST.deleteOne('/api/stocks', entry._id);
                }
                else {
                    entry.quantity -= currentQuanitity; //remove the remaining stocks from the entry.
                    var newCost = parseFloat(entry.purchasePrice * entry.quantity); //this is the value after it has been removed?
                    cost += eval(parseFloat(entry.cost) - parseFloat(newCost)); //This is the remaining balance from the old cost - the new.
                    value = entry.price * $scope.quantity; //Does that even make sense? Maybe..
                    entry.cost = newCost;
                    console.log(value);
                    console.log(cost);
                    //Now do I calculate the sell price using the two of these??
                    REST.update("/api/stocks/" + entry._id, entry)
                    finished=true;
                }
            }
            }
        })
        $scope.updateTableData()
    }
});