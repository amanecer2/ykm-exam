(function () {
    'use strict';
    angular.module('config', [])
        .constant('config', {
            key : 'AIzaSyCRJH3dKlfGzlDRN889Yr4zAiMRexsKb-M',
            places : 'https://maps.googleapis.com/maps/api/place/autocomplete/json?types=(cities)&key=AIzaSyCRJH3dKlfGzlDRN889Yr4zAiMRexsKb-M&input=',
            weather : 'http://samples.openweathermap.org/data/2.5/weather?appid=27725ab852aeae5bd4a816470d5de915&q='
        });
})();