(function () {
    'use strict';
    angular.module('weatherPlace', ['weatherService'])
        .component('weatherPlace', {
            template: `
                <section>
                         <div class="weather-place">             
                             <h4>Weather : {{$ctrl.weather}}</h4>
                             <h4>Wind Degree : {{$ctrl.windDgree}}</h4>
                             <h4>Wind Speed: {{$ctrl.windSpeed}}</h4>
                         </div> 
                  </section>
            `,
            controller:  ['weatherService',weatherPlace],
            bindings :{
                onUpdate : "&",
                city : '<'
            },

        });

    function weatherPlace(weatherService) {
        var vm = this;

        vm.$onInit = () => {

        };

        vm.$onChanges = function (changes) {
            if(!changes.city.currentValue){return false;}
            let city = changes.city;
            let {currentValue,previousValue} = city;
            if(!previousValue || (currentValue.name !== previousValue.name) ){
                getWeather(currentValue);
                vm.cityName = currentValue.name;
            }
        }

        function getWeather(city) {
            weatherService.getWeather(city).then( result => {
                let {weather : weather,wind:wind} = result.data;
                vm.weather = weather[0].description;
                vm.windSpeed = wind.speed;
                vm.windDgree = wind.deg;
            });
        }

    }
})();