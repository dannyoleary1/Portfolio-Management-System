angular.module('JSONModelService', []).factory('JSONModel', function() {

    var stocks = {
        "stocks":
        [
            {
                "description": "AIB",
                "location": "ise",
                "symbol": "AIBG_I",
                "date_in": "01/01/2018",
                "qty": 1000,
                "cost": 5000.00
            },
            {
                "description": "Bank Of Ireland",
                "location": "ise",
                "symbol": "BIRG_I",
                "date_in": "01/01/2012",
                "qty": 1000,
                "cost": 4000.00
            },
            {
                "description": "Bank Of Ireland",
                "location": "ise",
                "symbol": "BIRG_I",
                "date_in": "01/01/2013",
                "qty": 2000,
                "cost": 7000.00
            },
            {
                "description": "Bank Of Ireland",
                "location": "ise",
                "symbol": "BIRG_I",
                "date_in": "01/01/2014",
                "qty": 3000,
                "cost": 9000.00
            },
            {
                "description": "Bank Of Ireland",
                "location": "ise",
                "symbol": "BIRG_I",
                "date_in": "01/01/2015",
                "qty": 1000,
                "cost": 3500.00
            },
            {
                "description": "Bank Of Ireland",
                "location": "ise",
                "symbol": "BIRG_I",
                "date_in": "01/01/2016",
                "qty": 2000,
                "cost": 7000.00
            },
            {
                "description": "Bank Of Ireland",
                "location": "ise",
                "symbol": "BIRG_I",
                "date_in": "01/01/2017",
                "qty": 3000,
                "cost": 12000.00
            },
            {
                "description": "Bank Of Ireland",
                "location": "ise",
                "symbol": "BIRG_I",
                "date_in": "01/01/2018",
                "qty": 4000,
                "cost": 22000.00
            },
            {
                "description": "CRH",
                "location": "ise",
                "symbol": "CRH_I",
                "date_in": "01/01/2014",
                "qty": 3000,
                "cost": 60000.00
            },
            {
                "description": "CRH",
                "location": "ise",
                "symbol": "CRH_I",
                "date_in": "01/01/2015",
                "qty": 1000,
                "cost": 25000.00
            },
            {
                "description": "CRH",
                "location": "ise",
                "symbol": "CRH_I",
                "date_in": "01/01/2016",
                "qty": 2000,
                "cost": 60000.00
            },
            {
                "description": "Tesco",
                "location": "ftse",
                "symbol": "TSCO",
                "date_in": "01/01/2014",
                "qty": 4000,
                "cost": 12000.00
            },
            {
                "description": "Tesco",
                "location": "ftse",
                "symbol": "TSCO",
                "date_in": "01/01/2015",
                "qty": 8000,
                "cost": 20000.00
            },
            {
                "description": "Tesco",
                "location": "ftse",
                "symbol": "TSCO",
                "date_in": "01/01/2016",
                "qty": 2000,
                "cost": 9000.00
            },
            {
                "description": "Ripple",
                "location": "coinranking",
                "symbol": "ripple-xrp",
                "date_in": "01/01/2016",
                "qty": 3000,
                "cost": 6000.00
            },
            {
                "description": "Ripple",
                "location": "coinranking",
                "symbol": "ripple-xrp",
                "date_in": "01/01/2017",
                "qty": 1000,
                "cost": 2500.00
            },
            {
                "description": "Ripple",
                "location": "coinranking",
                "symbol": "ripple-xrp",
                "date_in": "01/01/2018",
                "qty": 2000,
                "cost": 6000.00
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