angular.module('MainUtilService', []).factory('MainUtil', function() {
    function getPurchasePrice(data){
        return data.cost/data.quantity
    }
    return{
        setUpData : function (currencyData, queryData) {
            console.log(queryData)
            if (currencyData.location == 'ise'){
                //step one. Get purchase price.
                currencyData.purchasePrice = getPurchasePrice(currencyData)

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