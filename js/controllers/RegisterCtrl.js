app.controller('RegisterCtrl', ['$scope', 'townsData', function ($scope, townsData) {
    townsData.getTowns()
        .$promise
        .then(function () {
            $scope.towns = data;
            console.log(data);
        })

}]);