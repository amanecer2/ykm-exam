(function () {
    'use strict';

    angular
        .module('weatherService', [])
        .factory('weatherService', weatherService);

    weatherService.$inject = ['httpAPIService','$q','config'];
    function weatherService(httpAPIService,$q,config) {


        return {
            getWeather
        };

        function getWeather(city){
            let {name, country} = city;
            let str = `${name} ${country}`.split(' ').join('%20');
            return httpAPIService.get(config.weather + str );
        }

    }
})();