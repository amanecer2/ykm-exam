(function () {
    'use strict';
    angular.module('favoritesPlaces', ['citiesService'])
        .component('favoritesPlaces', {
            template: `
            <section>
                 <div ng-if="$ctrl.favorites.length">
                    <h1>Favorites places</h1>
                    <div >
                            <div ng-repeat="favorite in $ctrl.favorites">
                                <div>{{favorite.name}}</div>
                                <div><weather-place city="favorite"></weather-place></div>
                                <div><remove-favorite favorite="favorite" ng-click="$ctrl.removeFavorite(favorite)"></remove-favorite></div>    
                            </div>
                    </div>
                 </div>
                    
                 <div ng-if="!$ctrl.favorites.length">
                        <h1>Sorry, No Favorties places</h1>
                        <h4>Please pick some places</h4>
                 </div>
             </section>
`,
            controller: ['citiesService', favoritesPlaces]

        });

    function favoritesPlaces(citiesService) {
        var vm = this;

        vm.removeFavorite = removeFavorite;
        vm.$onInit = () => {
            vm.favorites = citiesService.getFavorites();
        };

        function removeFavorite() {
            vm.favorites = citiesService.getFavorites();
        }
    }
})();