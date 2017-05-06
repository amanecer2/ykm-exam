(function () {
    'use strict';
    angular.module('addFavorite', ['citiesService'])
        .component('addFavorite', {
            template: `
               <button ng-click="$ctrl.addFavorite()">Add favorite</button>
`,
            controller:  ['citiesService',addFavorite]  ,
            bindings :{
                favorite : "<",
            }

        });

    function addFavorite(citiesService) {
        var vm = this;
        vm.addFavorite = addFavorite;
        vm.$onInit = () => {

        };
        vm.$onChanges = function (changes) {
            if(!changes.favorite.currentValue){return false;}
            vm.favorite = changes.favorite.currentValue;
        }

        function addFavorite() {
            if(vm.favorite){
                citiesService.addFavorite(vm.favorite);
            }
        }


    }
})();