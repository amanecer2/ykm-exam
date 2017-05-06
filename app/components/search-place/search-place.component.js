(function () {
    'use strict';
    angular.module('searchPlace', ['angucomplete-alt', 'citiesService'])
        .component('searchPlace', {
            template: `
            <section>
           <div angucomplete-alt id="ex2"
                placeholder="Search city"
                pause="300"
                selected-object="$ctrl.citySelected"
                local-data="$ctrl.localSearch"
                local-search="$ctrl.localSearch"
                title-field="name"
                description-field="cities"
       
                minlength="2"
               
                input-class="form-control form-control-small"
                match-class="highlight">
            </div>
            
                <h1>the city is : {{$ctrl.city.name}} {{$ctrl.city.country}}</h1>
            </section>
            `,
            controller: ['config', 'citiesService', searchPlace],
            bindings :{
                onUpdate : "&",
                refresh : '<'
            }

        });

    function searchPlace(config, citiesService) {
        var vm = this;
        vm.localSearch = localSearch;
        vm.citySelected = citySelected;

        vm.$onInit = () => {
            vm.placesApi = config.places;
            citiesService.getCities().then(cities=> {
                vm.cities = cities;
            });
        };

        vm.$onChanges = function (changes) {
            if(!changes.refresh.currentValue){return false;}
            vm.city = {};
            return false;
        };

        function localSearch (str) {
            return citiesService.filter(vm.cities,str);
        }
        function citySelected (city) {
            if(!city){
                vm.city = {};
                return false;
            }
            let {originalObject : original} = city;
            vm.city = original;
            citiesService.setCity(original);
            vm.onUpdate({data : original});
        }
    }
})();