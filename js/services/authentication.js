app.factory('authentication', ['localStorageServiceProvider', function (localStorageServiceProvider) {
    var key = 'user';

    function saveUserData(data) {
        localStorageServiceProvider.set(key, data);
    }

    function getUserData(data) {
        localStorageServiceProvider.get(key, data);
    }

    return {
        saveUser: saveUserData,
        getUser: getUserData
    }
} ]);