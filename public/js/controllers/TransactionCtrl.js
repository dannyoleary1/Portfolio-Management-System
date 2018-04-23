angular.module('TransactionCtrl', []).controller('TransactionController', function($scope, $q, REST) {
    $q.all([
        REST.get('/api/transactionHistory')
    ]).then(function (data) {
        $scope.allTransactions = data[0];
    });
});