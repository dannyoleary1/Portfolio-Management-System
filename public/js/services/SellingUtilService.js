angular.module("SellingUtilService", []).factory("Selling", function(REST){

    return {

        sellAllWhatIfStateOne: function (holdingArray) {
            var body = "";
            var body = (holdingArray.AIB != undefined) ? {"description": "AIB", "profitOrLoss":holdingArray.AIB} : "N/A";
            (body != "N/A") ? REST.create("/api/transactionHistory", body) : "N/A";
            //BOI
            var body = "";
            var body = (holdingArray["Bank Of Ireland"] != undefined) ? {"description": "Bank Of Ireland", "profitOrLoss":holdingArray["Bank Of Ireland"]} : "N/A";
            (body != "N/A") ? REST.create("/api/transactionHistory", body) : "N/A";
            //CRH
            var body = "";
            var body = (holdingArray["CRH"] != undefined) ? {"description": "CRH", "profitOrLoss":holdingArray["CRH"]} : "N/A";
            (body != "N/A") ? REST.create("/api/transactionHistory", body) : "N/A";
            //Ripple
            var body = "";
            var body = (holdingArray["Ripple"] != undefined) ? {"description": "Ripple", "profitOrLoss":holdingArray["Ripple"]} : "N/A";
            (body != "N/A") ? REST.create("/api/transactionHistory", body) : "N/A";
            //Tesco
            var body = "";
            var body = (holdingArray["Tesco"] != undefined) ? {"description": "Tesco", "profitOrLoss": holdingArray["Tesco"]} : "N/A";
            (body != "N/A") ? REST.create("api/transactionHistory", body) : "N/A";
        },

        sellAllWhatIfStateTwo: function (holdingArrayState2) {
            var body = "";
            var body = (holdingArrayState2.AIB != undefined) ? {"description": "AIB", "profitOrLoss":holdingArrayState2.AIB} : "N/A";
            (body != "N/A") ? REST.create("/api/transactionHistory", body) : "N/A";
            (body != "N/A") ? delete holdingArrayState2["AIB"] : "N/A";
            //BOI
            var body = "";
            var body = (holdingArrayState2["Bank Of Ireland"] != undefined) ? {"description": "Bank Of Ireland", "profitOrLoss":$scope.holdingArrayState2["Bank Of Ireland"]} : "N/A";
            (body != "N/A") ? REST.create("/api/transactionHistory", body) : "N/A";
            (body != "N/A") ? delete holdingArrayState2["Banke Of Ireland"] : "N/A";
            //CRH
            var body = "";
            var body = (holdingArrayState2["CRH"] != undefined) ? {"description": "CRH", "profitOrLoss":holdingArrayState2["CRH"]} : "N/A";
            (body != "N/A") ? REST.create("/api/transactionHistory", body) : "N/A";
            (body != "N/A") ? delete holdingArrayState2["CRH"] : "N/A";
            //Ripple
            var body = "";
            var body = (holdingArrayState2["Ripple"] != undefined) ? {"description": "Ripple", "profitOrLoss":holdingArrayState2["Ripple"]} : "N/A";
            (body != "N/A") ? REST.create("/api/transactionHistory", body) : "N/A";
            (body != "N/A") ? delete holdingArrayState2["Ripple"] : "N/A";
            //Tesco
            var body = "";
            var body = (holdingArrayState2["Tesco"] != undefined) ? {"description": "Tesco", "profitOrLoss": holdingArrayState2["Tesco"]} : "N/A";
            (body != "N/A") ? REST.create("api/transactionHistory", body) : "N/A";
            (body != "N/A") ? delete holdingArrayState2["Tesco"] : "N/A";
        }
    }
})