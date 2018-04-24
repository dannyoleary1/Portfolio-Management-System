angular.module('MainUtilService', []).factory('MainUtil', function() {


    function getPurchasePrice(data){
        return (data.cost/data.quantity).toFixed(2)
    }
    function getSellCostValue(value){
        if (value < 25000){
            val = (value*0.01)+1.25
            if (val < 26.25){
                return 26.25
            }
            return ((value*0.01)+1.25).toFixed(2);
        }
        else{
            var tempVal = 25000*0.01
            value = (value - 25000)
            value = (value*0.005)+1.25
            if (tempVal+value<26.25){
                return 26.25
            }
            return (tempVal + value).toFixed(2);
        }
    }
    function assignValuesToEntry(currencyData){
        currencyData.value = (currencyData.quantity * currencyData.price).toFixed(2);
        currencyData.sellCosts = getSellCostValue(currencyData.value)
        currencyData.gainOrLost = (currencyData.value - currencyData.cost)-currencyData.sellCosts
        currencyData.percentGainOrLost = Math.round((currencyData.gainOrLost/currencyData.cost)*100)+"%"
    }
    return{
        setUpData : function (currencyData, queryData, currentCase) {
            currencyData.cost = (currencyData.cost).toFixed(2);
            if (currencyData.purchasePrice == 0) {
                currencyData.purchasePrice = getPurchasePrice(currencyData)
            }
            if (currencyData.location == 'ise'){
                //step one. Get purchase price.

                if (currencyData.symbol == 'AIBG_I'){
                    if (currentCase != "live")
                    {
                        currencyData.price = queryData.ise.data[0].price
                        assignValuesToEntry(currencyData)
                    }
                    else{
                        currencyData.price = queryData.ise.data[1].price //TODO this should be more dynamic really
                        assignValuesToEntry(currencyData)
                    }
                }
                else if (currencyData.symbol == 'BIRG_I'){
                    if (currentCase != "live") {
                        currencyData.price = queryData.ise.data[1].price;
                        assignValuesToEntry(currencyData);
                    }
                    else{
                        currencyData.price = queryData.ise.data[6].price;
                        assignValuesToEntry(currencyData);
                    }
                }
                else{
                    if (currentCase != "live") {
                        currencyData.price = queryData.ise.data[2].price;
                        assignValuesToEntry(currencyData);
                    }
                    else{
                        currencyData.price = queryData.ise.data[10].price;
                        assignValuesToEntry(currencyData);
                    }
                }
            }
            else if (currencyData.location == 'ftse'){
                if (currentCase != "live"){
                    currencyData.price = queryData.ftse350.data[0].price;
                    assignValuesToEntry(currencyData)
                }
                else{
                    currencyData.price = queryData.ftse350.data[320].price;
                    assignValuesToEntry(currencyData)
                }

            }
            else if (currencyData.location == 'coinranking'){
                if (currentCase != "live"){
                    currencyData.price = queryData.coinranking.data[0].price
                    assignValuesToEntry(currencyData)
                }
                else{
                    currencyData.price = queryData.coinranking.data[2].price;
                    assignValuesToEntry(currencyData);
                }

            }
        },

        getPurchasePrice : function () {

        },

        sellingStock: function (cost, value, information, total) {
            var tax = getSellCostValue(value);
            var profitOrLoss = (value-tax)-cost;
            var body = {
                "description": information.description,
                "location": information.location,
                "symbol": information.symbol,
                "dateIn": information.dateIn,
                "quantity": total,
                "dateOut": information.dateOut,
                "profitOrLoss": profitOrLoss
            }
            return body;
        }
    }
})