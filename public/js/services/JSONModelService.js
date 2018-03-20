angular.module('JSONModelService', []).factory('JSONModel', function() {

    var stocks = {}
    return {
        // call to get all nerds
        get : function() {
            return stocks;
        }
    }
});