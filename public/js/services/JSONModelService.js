angular.module('JSONModelService', []).factory('JSONModel', function() {
    var stocks = {
        "stocks":
        [
            {
                "description": "AIB",
                "location": "ise",
                "symbol": "AIBG_I",
                "dateIn": "01/01/2018",
                "quantity": 1000,
                "cost": 5000.00,
                "dateOut": "",
                "purchasePrice": 5.00,
                "price": 0.00,
                "value": 0.00,
                "gainOrLost": 0.00,
                "percentGainOrlost": 0.00,
                "sellCosts": 0.00,
                "_id": 1
            },
            {
                "description": "Bank Of Ireland",
                "location": "ise",
                "symbol": "BIRG_I",
                "dateIn": "01/01/2012",
                "quantity": 1000,
                "cost": 4000.00,
                "dateOut": "",
                "purchasePrice": 4.00,
                "price": 0.00,
                "value": 0.00,
                "gainOrLost": 0.00,
                "percentGainOrLost": 0.00,
                "sellCosts": 0.00,
                "_id": 2
            },
            {
                "description": "Bank Of Ireland",
                "location": "ise",
                "symbol": "BIRG_I",
                "dateIn": "01/01/2013",
                "quantity": 2000,
                "cost": 7000.00,
                "dateOut": "",
                "purchasePrice": 3.50,
                "price": 0.00,
                "value": 0.00,
                "gainOrLost": 0.00,
                "percentGainOrLost": 0.00,
                "sellCosts": 0.00,
                "_id": 3
            },
            {
                "description": "Bank Of Ireland",
                "location": "ise",
                "symbol": "BIRG_I",
                "dateIn": "01/01/2014",
                "quantity": 3000,
                "cost": 9000.00,
                "dateOut": "",
                "purchasePrice": 3.00,
                "price": 0.00,
                "value": 0.00,
                "gainOrLost": 0.00,
                "percentGainOrLost": 0.00,
                "sellCosts": 0.00,
                "_id": 4
            },
            {
                "description": "Bank Of Ireland",
                "location": "ise",
                "symbol": "BIRG_I",
                "dateIn": "01/01/2015",
                "quantity": 1000,
                "cost": 3500.00,
                "dateOut": "",
                "purchasePrice": 3.50,
                "price": 0.00,
                "value": 0.00,
                "gainOrLost": 0.00,
                "percentGainOrLost": 0.00,
                "sellCosts": 0.00,
                "_id": 5
            },
            {
                "description": "Bank Of Ireland",
                "location": "ise",
                "symbol": "BIRG_I",
                "dateIn": "01/01/2016",
                "quantity": 2000,
                "cost": 7000.00,
                "dateOut": "",
                "purchasePrice": 3.50,
                "price": 0.00,
                "value": 0.00,
                "gainOrLost": 0.00,
                "percentGainOrLost": 0.00,
                "sellCosts": 0.00,
                "_id": 6
            },
            {
                "description": "Bank Of Ireland",
                "location": "ise",
                "symbol": "BIRG_I",
                "dateIn": "01/01/2017",
                "quantity": 3000,
                "cost": 12000.00,
                "dateOut": "",
                "purchasePrice": 4.00,
                "price": 0.00,
                "value": 0.00,
                "gainOrLost": 0.00,
                "percentGainOrLost": 0.00,
                "sellCosts": 0.00,
                "_id": 7
            },
            {
                "description": "Bank Of Ireland",
                "location": "ise",
                "symbol": "BIRG_I",
                "dateIn": "01/01/2018",
                "quantity": 4000,
                "cost": 22000.00,
                "dateOut": "",
                "purchasePrice": 5.50,
                "price": 0.00,
                "value": 0.00,
                "gainOrLost": 0.00,
                "percentGainOrLost": 0.00,
                "sellCosts": 0.00,
                "_id": 8
            },
            {
                "description": "CRH",
                "location": "ise",
                "symbol": "CRH_I",
                "dateIn": "01/01/2014",
                "quantity": 3000,
                "cost": 60000.00,
                "dateOut": "",
                "purchasePrice": 20.00,
                "price": 0.00,
                "value": 0.00,
                "gainOrLost": 0.00,
                "percentGainOrLost": 0.00,
                "sellCosts": 0.00,
                "_id": 9
            },
            {
                "description": "CRH",
                "location": "ise",
                "symbol": "CRH_I",
                "dateIn": "01/01/2015",
                "quantity": 1000,
                "cost": 25000.00,
                "dateOut": "",
                "purchasePrice": 25.00,
                "price": 0.00,
                "value": 0.00,
                "gainOrLost": 0.00,
                "percentGainOrLost": 0.00,
                "sellCosts": 0.00,
                "_id": 10
            },
            {
                "description": "CRH",
                "location": "ise",
                "symbol": "CRH_I",
                "dateIn": "01/01/2016",
                "quantity": 2000,
                "cost": 60000.00,
                "dateOut": "",
                "purchasePrice": 30.00,
                "price": 0.00,
                "value": 0.00,
                "gainOrLost": 0.00,
                "percentGainOrLost": 0.00,
                "sellCosts": 0.00,
                "_id": 11
            },
            {
                "description": "Tesco",
                "location": "ftse",
                "symbol": "TSCO",
                "dateIn": "01/01/2014",
                "quantity": 4000,
                "cost": 12000.00,
                "dateOut": "",
                "purchasePrice": 3.00,
                "price": 0.00,
                "value": 0.00,
                "gainOrLost": 0.00,
                "percentGainOrlLst": 0.00,
                "sellCosts": 0.00,
                "_id": 12
            },
            {
                "description": "Tesco",
                "location": "ftse",
                "symbol": "TSCO",
                "dateIn": "01/01/2015",
                "quantity": 8000,
                "cost": 20000.00,
                "dateOut": "",
                "purchasePrice": 2.50,
                "price": 0.00,
                "value": 0.00,
                "gainOrLost": 0.00,
                "percentGainOrLost": 0.00,
                "sellCosts": 0.00,
                "_id": 13
            },
            {
                "description": "Tesco",
                "location": "ftse",
                "symbol": "TSCO",
                "dateIn": "01/01/2016",
                "quantity": 2000,
                "cost": 9000.00,
                "dateOut": "",
                "purchasePrice": 4.50,
                "price": 0.00,
                "value": 0.00,
                "gainOrLost": 0.00,
                "percentGainOrLost": 0.00,
                "sellCosts": 0.00,
                "_id": 14
            },
            {
                "description": "Ripple",
                "location": "coinranking",
                "symbol": "ripple-xrp",
                "dateIn": "01/01/2016",
                "quantity": 3000,
                "cost": 6000.00,
                "dateOut": "",
                "purchasePrice": 2.00,
                "price": 0.00,
                "value": 0.00,
                "gainOrLost": 0.00,
                "percentGainOrLost": 0.00,
                "sellCosts": 0.00,
                "_id": 15
            },
            {
                "description": "Ripple",
                "location": "coinranking",
                "symbol": "ripple-xrp",
                "dateIn": "01/01/2017",
                "quantity": 1000,
                "cost": 2500.00,
                "dateOut": "",
                "purchasePrice": 2.50,
                "price": 0.00,
                "value": 0.00,
                "gainOrLost": 0.00,
                "percentGainOrLost": 0.00,
                "sellCosts": 0.00,
                "_id": 16
            },
            {
                "description": "Ripple",
                "location": "coinranking",
                "symbol": "ripple-xrp",
                "dateIn": "01/01/2018",
                "quantity": 2000,
                "cost": 6000.00,
                "dateOut": "",
                "purchasePrice": 3.00,
                "price": 0.00,
                "value": 0.00,
                "gainOrLost": 0.00,
                "percentGainOrLost": 0.00,
                "sellCosts": 0.00,
                "_id": 17
            }
        ]
    }
    return {
        // call to get all nerds
        get : function() {
            return stocks;
        }
    }
});