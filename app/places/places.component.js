(function () {
    'use strict';
    angular.module('places', [])
    .component('places', {
        template: `
                <section>
                    <search-place refresh="$crtrl.refresh" on-update = "$ctrl.onSearchPlace(data)"></search-place>
                    <div ng-if="$ctrl.show">
                            <div> <weather-place city = $ctrl.city ></weather-place></div>
                            <add-favorite favorite = $ctrl.city ng-click="$ctrl.show = false"></add-favorite>
                    </div>
                   
                </section>
               
`,
        controller:  [places]

    });

    function places() {
        var vm = this;
        vm.onSearchPlace = onSearchPlace;
        vm.$onInit = () => {
            vm.show = false;
        };

        function onSearchPlace(data) {
            vm.city = data;
            vm.show = true;
        }

    }
})();