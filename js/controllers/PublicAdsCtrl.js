app.controller('PublicAdsCtrl',[ '$scope','adsData', 'filter',function ($scope, adsData, filter) {
    $scope.ready = false;


    function loadPublicAds(filterParams) {
        filterParams = filterParams || {};
        adsData.getPublicAds(filterParams)
            .$promise
            .then(function (data) {
                $scope.adsData = data;
                $scope.ready = true;
            });
    }

   loadPublicAds();

    $scope.$on('categoryClicked', function() {
        loadPublicAds(filter.getFilterParams())
    })

    $scope.$on('townClicked', function() {
        loadPublicAds(filter.getFilterParams())
    })
}]);