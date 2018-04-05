angular.module('MainUtilService', []).factory('MainUtil', function() {
    function getPurchasePrice(data){
        return data.cost/data.quantity
    }
    return{
        setUpData : function (currencyData, queryData) {
            if (currencyData.location == 'ise'){
                //step one. Get purchase price.
                currencyData.purchasePrice = getPurchasePrice(currencyData)
                console.log(currencyData)
                console.log(queryData)
                if (currencyData.symbol == 'AIBG_I'){
                    currencyData.price = queryData.ise.data[0].price
                    currencyData.value = (currencyData.quantity * currencyData.price).toFixed(2)
                    currencyData.sellCosts = (currencyData.value * 0.01)+1.25
                    currencyData.gainOrLost = (currencyData.value - currencyData.cost)-currencyData.sellCosts
                    currencyData.percentGainOrLost = Math.round((currencyData.gainOrLost/currencyData.cost)*100)+"%"
                }
                else if (currencyData.symbol == 'BIRG_I'){
                    currencyData.price = queryData.ise.data[1].price
                    currencyData.value = (currencyData.quantity * currencyData.price).toFixed(2)
                    currencyData.sellCosts = (currencyData.value * 0.01)+1.25
                    currencyData.gainOrLost = (currencyData.value - currencyData.cost)-currencyData.sellCosts
                    currencyData.percentGainOrLost = Math.round((currencyData.gainOrLost/currencyData.cost)*100)+"%"
                }
                else{
                    currencyData.price = queryData.ise.data[2].price
                    currencyData.value = (currencyData.quantity * currencyData.price).toFixed(2)
                    currencyData.sellCosts = (currencyData.value * 0.01)+1.25
                    currencyData.gainOrLost = (currencyData.value - currencyData.cost)-currencyData.sellCosts
                    currencyData.percentGainOrLost = Math.round((currencyData.gainOrLost/currencyData.cost)*100)+"%"
                }


                //0,1,2 in an array depends on what type of stock. 0 is AIBG_I. 1 is BIRG_I, 2 is CRH_I

                //step two. Get price now.
            }
            else if (currencyData.location == 'ftse'){

            }
            else if (currencyData.location == 'coinranking'){

            }
        },

        getPurchasePrice : function () {

        }
    }
})