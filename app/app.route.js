(function () {
    angular.module('exam')

        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('places', {
                        url: '/places',

                        template: '<places></places>'
                    }
                )
                .state('favorites', {
                        url: '/favorites',

                        template: '<favorites-places></favorites-places>'
                    }
                )
            $urlRouterProvider.otherwise('/places');
        }




        );
})();