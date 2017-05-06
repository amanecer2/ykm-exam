(function () {
    'use strict';

    angular
        .module('citiesService', [])
        .factory('citiesService', citiesService);

    citiesService.$inject = ['httpAPIService','$q'];
    function citiesService(httpAPIService,$q) {

        let cities = [];
        let city = {};
        let favorites = [];
        return {
            getCities ,
            filterCities,
            filter,
            getCity,
            setCity,
            addFavorite,
            removeFavorite,
            getFavorites
        };

        function addFavorite(newFavorite) {
            if(favorites.indexOf(newFavorite)=== -1){
                favorites.push(newFavorite);
            }
        }function removeFavorite(oldFavorite) {
            favorites = favorites.filter(favorite => favorite.name !== oldFavorite.name);
        }
        function getFavorites() {
            return favorites;
        }
        
        function filterCities(str) {
           if(!str || str.length < 2 ){
               return $q.resolve();
           }
           return getCities().then(cities => {
                return filter(cities,str);
            });

        }

        function setCity(newCity) {
            city = newCity;
        }
        function getCity() {
            return city;
        }
        function getCities() {
            if (cities.length) {
                const d = $q.defer();
                d.resolve(cities);
                return d.promise;
            } else {
                return httpAPIService.get("../vendor/cities.json").then(data => {
                    cities = data.data;
                    return data.data;
                });

            }
        }
          function filter(arr,str) {
            str = str ? str.toLowerCase() : str;
              return arr.filter(x =>{
                  return x.name.toLowerCase().indexOf(str) > -1;
              } );
          }

    }
})();