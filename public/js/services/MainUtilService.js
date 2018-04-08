angular.module('MainUtilService', []).factory('MainUtil', function() {
    function getPurchasePrice(data){
        return data.cost/data.quantity
    }
    function getSellCostValue(value){
        if (value < 25000){
            return (value*0.01)+1.25
        }
        else{
            var tempVal = 25000*0.01
            value = (value - 25000)
            value = (value*0.005)+1.25
            return (tempVal + value)
        }
    }
    function assignValuesToEntry(currencyData){
        currencyData.value = (currencyData.quantity * currencyData.price).toFixed(2)
        currencyData.sellCosts = getSellCostValue(currencyData.value)
        currencyData.gainOrLost = (currencyData.value - currencyData.cost)-currencyData.sellCosts
        currencyData.percentGainOrLost = Math.round((currencyData.gainOrLost/currencyData.cost)*100)+"%"
    }
    return{
        setUpData : function (currencyData, queryData) {
            if (currencyData.location == 'ise'){
                //step one. Get purchase price.
                currencyData.purchasePrice = getPurchasePrice(currencyData)
                if (currencyData.symbol == 'AIBG_I'){
                    currencyData.price = queryData.ise.data[0].price
                    assignValuesToEntry(currencyData)
                }
                else if (currencyData.symbol == 'BIRG_I'){
                    currencyData.price = queryData.ise.data[1].price
                    assignValuesToEntry(currencyData)
                }
                else{
                    currencyData.price = queryData.ise.data[2].price
                    assignValuesToEntry(currencyData)
                }
                //0,1,2 in an array depends on what type of stock. 0 is AIBG_I. 1 is BIRG_I, 2 is CRH_I

                //step two. Get price now.
            }
            else if (currencyData.location == 'ftse'){
                currencyData.price = queryData.ftse350.data[0].price
                assignValuesToEntry(currencyData)
            }
            else if (currencyData.location == 'coinranking'){
                currencyData.price = queryData.coinranking.data[0].price
                assignValuesToEntry(currencyData)
            }
        },

        getPurchasePrice : function () {

        }
    }
})