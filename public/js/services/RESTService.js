angular.module('RESTService', []).factory('REST', ['$http', function($http) {
    return{
        get : function(url){
            return $http.get(url).then(function(response) {
                //return data when promise resolved
                return response.data;
            });
        },

        create : function (url, postData) {
            return $http.post(url, postData)
        },

        delete : function (url){
            return $http.delete(url)
        },

        deleteOne: function (url,id) {
            return $http.delete(url+id)
        },

        update: function(url, postData){
            return $http.put(url, postData)
        }
    }
}])