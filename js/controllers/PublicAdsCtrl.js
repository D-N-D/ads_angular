app.controller('PublicAdsCtrl',[ '$scope','adsData', 'filter',function ($scope, adsData, filter) {
    $scope.ready = false;

    $scope.currentPage = 1;
    $scope.startPage = 1;
    $scope.pageSize = 10;

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

    $scope.pageChanged = function() {
        filter.setPageParams({startPage: 1, pageSize: adsData.numItems / adsData.numPages});
        adsData.getPublicAds(filter.getFilterParams());
    };

    $scope.$on('categoryClicked', function() {
        loadPublicAds(filter.getFilterParams())
    })

    $scope.$on('townClicked', function() {
        loadPublicAds(filter.getFilterParams())
    })
}]);