//app.factory('authentication', ['localStorageServiceProvider', function (localStorageServiceProvider) {
//    var key = 'user';
//
//    function saveUserData(data) {
//        localStorageServiceProvider.set(key, data);
//    }
//
//    function getUserData(data) {
//        localStorageServiceProvider.get(key, data);
//    }
//
//    return {
//        saveUser: saveUserData,
//        getUser: getUserData
//    }
//} ]);

app.factory('authentication', function () {
    var key = 'user';

    function saveUserData(data) {
        localStorage.setItem(key, angular.toJson(data));
    }

    function getUserData() {
        return angular.fromJson(localStorage.get(key));
    }

    function getHeaders() {
        var headers = {};
        var userData = getUserData();

        if (userData) {
            headers.Authorization = 'Bearer ' + getUserData().access_token;
        }

        return headers;
    }

    function removeUser() {
        localStorage.removeItem(key);
    }

    function isAdmin() {
        var isAdmin = getUserData().isAdmin();
        return isAdmin;
    }

    function isLoggedIn() {
        return !!getUserData(); // returning a boolean value of the local storage object indicating if there's an user logged in;
    }

    return {
        saveUser: saveUserData,
        getUser: getUserData,
        getHeaders: getHeaders,
        removeUser: removeUser,
        isAdmin: isAdmin,
        isLoggedIn: isLoggedIn
    }
} );