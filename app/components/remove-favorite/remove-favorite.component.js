(function () {
    'use strict';
    angular.module('removeFavorite', ['citiesService'])
        .component('removeFavorite', {
            template: `
                  <section>
                     <button ng-click="$ctrl.removeFavorite()">Remove favorite</button>
                   </section>   
`,
            controller:  ['citiesService',removeFavorite]  ,
            bindings :{
                favorite : "<",
            }

        });

    function removeFavorite(citiesService) {
        var vm = this;
        vm.removeFavorite = removeFavorite;
        vm.$onInit = () => {

        };
        vm.$onChanges = function (changes) {
            if(!changes.favorite.currentValue){return false;}
            vm.favorite = changes.favorite.currentValue;
        }

        function removeFavorite() {
            if(vm.favorite){
                citiesService.removeFavorite(vm.favorite);
            }
        }


    }
})();