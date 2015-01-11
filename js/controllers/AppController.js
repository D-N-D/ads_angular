app.controller('AppController',
    function ($scope, $location, authentication, notify) {
        $scope.authentication = authentication;

        $scope.logout = function() {
            authentication.logout();
            notify.showInfo("Logout successful");
            $location.path('/');
        };
    }
);
