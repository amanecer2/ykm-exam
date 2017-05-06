(function () {
    'use strict';

    angular
        .module('httpAPIService', [])
        .factory('httpAPIService', httpAPIService);

    httpAPIService.$inject = ['$http'];
    function httpAPIService($http) {

        return {
            post: post,
            get: get,

        };

        function post(url, methodParams, method) {
            return $http({
                method: method || 'POST',
                url: url,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: (methodParams)
            });
        }

        function get(url) {
            return $http.get(url)
                .then(data => {
                    return data
                }, error => {
                    debugger
                    return error;
                });
        }
    }
})();